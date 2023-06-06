import React, { useState } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import Toast from "react-native-toast-message";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangePasswordForm.data";
import { styles } from "./ChangePasswordForm.styles";

export function ChangePasswordForm(props) {
  const { onClose } = props;
  const [hideOldPassword, setHideOldPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideRepeatNewPassword, setHideRepeatNewPassword] = useState(true);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  const onHideOldPassword = () => {
    setHideOldPassword((oldValue) => !oldValue);
  };

  const onHideNewPassword = () => {
    setHideNewPassword((oldValue) => !oldValue);
  };

  const onHideRepeatNewPassword = () => {
    setHideRepeatNewPassword((oldValue) => !oldValue);
  };

  return (
    <View style={styles.content}>
      <Input
        placeholder="Contraseña actual"
        containerStyle={styles.input}
        secureTextEntry={hideOldPassword}
        rightIcon={{
          type: "material-community",
          name: hideOldPassword ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: onHideOldPassword,
        }}
        onChangeText={(text) => {
          formik.setFieldValue("password", text);
        }}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Nueva contraseña"
        containerStyle={styles.input}
        secureTextEntry={hideNewPassword}
        rightIcon={{
          type: "material-community",
          name: hideNewPassword ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: onHideNewPassword,
        }}
        onChangeText={(text) => {
          formik.setFieldValue("newPassword", text);
        }}
        errorMessage={formik.errors.newPassword}
      />
      <Input
        placeholder="Repetir nueva contraseña"
        containerStyle={styles.input}
        secureTextEntry={hideRepeatNewPassword}
        rightIcon={{
          type: "material-community",
          name: hideRepeatNewPassword ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: onHideRepeatNewPassword,
        }}
        onChangeText={(text) => {
          formik.setFieldValue("repeatNewPassord", text);
        }}
        errorMessage={formik.errors.repeatNewPassord}
      />

      <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.submitForm}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
