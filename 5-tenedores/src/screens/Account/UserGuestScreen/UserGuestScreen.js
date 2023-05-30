import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image, TouchableOpacity } from "react-native";
import { styles } from "./UserGuestScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function UserGuestScreen() {
  //esto es para conseguir el 'navigation' si no lo pasan en props
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sido tu experiencia.
      </Text>
      <TouchableOpacity onPress={goToLogin} style={styles.btnStyle}>
        <Text style={styles.btnText}>Ver tu perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
