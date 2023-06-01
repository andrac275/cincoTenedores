import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./LoginForm.styles";
import { Input, Icon, Button } from "react-native-elements";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useFormik } from "formik";

export function LoginForm() {
  const [hidePass, setVHidePass] = useState(true);
  const changePassVisibility = () => {
    setVHidePass((prev) => !prev);
  };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formData) => {
      console.log(formData.email);
      console.log(formData.password);
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
