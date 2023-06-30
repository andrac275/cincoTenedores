import React from "react";
import { View } from "react-native";
import { AirbnbRating, Input, Button } from "react-native-elements";
import {
  initialValues,
  validationSchema,
} from "./AddReviewRestaurantScreen.data";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { UUID } from "uuidjs";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  query,
  collection,
  where,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { map, mean } from "lodash";
import { db } from "../../../utils/";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./AddReviewRestaurantScreen.styles";

export function AddReviewRestaurantScreen(props) {
  const { route } = props;
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        const idDoc = UUID.generate();
        const newData = formValue;
        newData.id = idDoc;
        newData.idRestaurant = route.params.idRestaurant;
        newData.idUser = auth.currentUser.uid;
        newData.avatar = auth.currentUser.photoURL;
        newData.createdAt = new Date();

        await setDoc(doc(db, "reviews", idDoc), newData);
        await updateRestaurant();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al enviar el comentario",
        });
      }
    },
  });

  const updateRestaurant = async () => {
    //Obtener todas las reviews de un determinado restaurante
    const q = query(
      collection(db, "reviews"),
      where("idRestaurant", "==", route.params.idRestaurant)
    );

    //Se ejecuta la query anterior
    onSnapshot(q, async (snapShot) => {
      //Array con todas las reviews
      const reviews = snapShot.docs;
      //Map para iterar las reviews y contruir un array de puntuaciones
      const arrayStars = map(reviews, (review) => review.data().rating);
      //Mean: funcion de lodash que saca la media de un array numerico
      const media = mean(arrayStars);
      //Obtener el restaurante al que le hemos escrito la review
      const restaurantRef = doc(db, "restaurants", route.params.idRestaurant);
      //Actualizar la media del restaurante
      await updateDoc(restaurantRef, {
        ratingMedia: media,
      });

      navigation.goBack();
    });
  };

  return (
    <View style={styles.content}>
      <View style={styles.ratingContent}>
        <AirbnbRating
          count={5}
          reviews={["Pésimo", "Deficiente", "Normal", "Bueno", "Excelente"]}
          defaultRating={formik.values.rating}
          size={35}
          onFinishRating={(rating) => {
            formik.setFieldValue("rating", rating);
          }}
        />
      </View>
      <View>
        <Input
          placeholder="Titulo"
          onChangeText={(text) => formik.setFieldValue("title", text)}
          errorMessage={formik.errors.title}
        />
        <Input
          placeholder="Comentario"
          multiline
          inputContainerStyle={styles.comment}
          onChangeText={(text) => {
            formik.setFieldValue("comment", text);
          }}
          errorMessage={formik.errors.comment}
        />
      </View>

      <Button
        title="Enviar comentario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
