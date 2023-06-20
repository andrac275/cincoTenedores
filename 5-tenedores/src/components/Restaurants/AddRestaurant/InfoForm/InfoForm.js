import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { styles } from "./InfoForm.styles";

export function InfoForm() {
  return (
    <View style={styles.content}>
      <Input placeholder="Nombre del restaurante" />
      <Input placeholder="Dirección" />
      <Input
        placeholder="Descripción del restaurante"
        multiline={true}
        inputContainerStyle={styles.textArea}
      />
    </View>
  );
}
