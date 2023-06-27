import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import {
  InfoForm,
  UploadImagesForm,
  ImageRestaurant,
} from "../../../components/Restaurants/AddRestaurant";
import { styles } from "./AddRestaurantScreen.styles";
import { useFormik } from "formik";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useNavigation } from "@react-navigation/native";
import { UUID } from "uuidjs";
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";

export function AddRestaurantScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = UUID.generate();
        newData.createdAt = new Date();

        const myDB = doc(db, "restaurants", newData.id);
        await setDoc(myDB, newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageRestaurant formik={formik} />
      <InfoForm formik={formik} />
      <UploadImagesForm formik={formik} />
      <Button
        title="Crear restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
