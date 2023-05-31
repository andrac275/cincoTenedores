import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Input, Icon, Text, Button } from "react-native-elements";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
//import { screen } from "../../../utils/";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log("1");
        const auth = getAuth();
        console.log("2");
        console.log(formValue.email);
        console.log(formValue.password);
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        //navigation.navigate(screen.account.account);
        //Sinonimo a lo de arriba
        navigation.goBack();
      } catch (error) {
        console.log("entra al catch");
        console.log(error);
      }
    },
  });
  const showHidePassword = () => setShowPassword((prevState) => !prevState);

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHidePassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHidePassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
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
