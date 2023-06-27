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
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";

export function AddRestaurantScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
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
