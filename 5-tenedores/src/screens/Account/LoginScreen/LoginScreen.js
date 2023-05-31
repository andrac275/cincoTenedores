import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreen.styles";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    console.log("ir al registro");
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text>Estamos en el login</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
