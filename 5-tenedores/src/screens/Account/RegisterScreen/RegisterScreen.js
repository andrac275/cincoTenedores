import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/Auth";

export function RegisterScreen() {
  return (
    <View>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </View>
  );
}
