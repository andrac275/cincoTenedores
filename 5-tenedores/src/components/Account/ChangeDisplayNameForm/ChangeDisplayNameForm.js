import React from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeDisplayNameForm.styles";

export function ChangeDisplayNameForm(props) {
  const { onClose } = props;
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y apellido"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
      />
      <Button
        title="Cambiar nombre y apellido"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
