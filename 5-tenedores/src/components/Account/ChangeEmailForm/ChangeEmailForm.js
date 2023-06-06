import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeEmailForm.data";
import { styles } from "./ChangeEmailForm.styles";

export function ChangeEmailForm(props) {
  const { onClose, onReload } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  const onHidePassword = () => {
    setHidePassword((prevValue) => !prevValue);
  };

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nuevo email"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={hidePassword}
        rightIcon={{
          type: "material-community",
          name: hidePassword ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: onHidePassword,
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Cambiar email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
