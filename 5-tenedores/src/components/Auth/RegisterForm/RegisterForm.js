import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Input, Icon, Text } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      console.log("formulario enviado");
      console.log(formValue);
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={formik.handleSubmit}
      >
        <Text style={styles.btnText}>Unirse</Text>
      </TouchableOpacity>
    </View>
  );
}
