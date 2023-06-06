import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeEmailForm.styles";

export function ChangeEmailForm(props) {
  const { onClose, onReload } = props;
  const [hidePassword, setHidePassword] = useState(true);

  const onHidePassword = () => {
    setHidePassword((prevValue) => !prevValue);
  };

  return (
    <View style={styles.content}>
      <Input placeholder="Nuevo email" containerStyle={styles.input} />
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
      />
      <Button
        title="Cambiar email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
