import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./LoginForm.styles";
import { Input, Icon, Button } from "react-native-elements";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

export function LoginForm() {
  const [hidePass, setVHidePass] = useState(true);
  const navigation = useNavigation();
  const changePassVisibility = () => {
    setVHidePass((prev) => !prev);
  };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Correo electrónico o contraseña incorrectos",
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        onChangeText={(value) => {
          formik.setFieldValue("email", value);
        }}
        errorMessage={formik.errors.email}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={hidePass}
        onChangeText={(value) => {
          formik.setFieldValue("password", value);
        }}
        errorMessage={formik.errors.password}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePass ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={changePassVisibility}
          />
        }
      />
      <Button
        title="Iniciar sesion"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
