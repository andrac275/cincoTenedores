import React from "react";
import { View, Text } from "react-native";
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
import { db } from "../../../utils/";
import { styles } from "./AddReviewRestaurantScreen.styles";

export function AddReviewRestaurantScreen(props) {
  const { route } = props;
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
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al enviar el comentario",
        });
      }
    },
  });

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
