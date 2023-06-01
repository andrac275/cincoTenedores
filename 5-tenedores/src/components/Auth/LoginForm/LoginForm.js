import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./LoginForm.styles";
import { Input, Icon, Button } from "react-native-elements";

export function LoginForm() {
  const [hidePass, setVHidePass] = useState(true);
  const changePassVisibility = () => {
    setVHidePass((prev) => !prev);
  };
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={hidePass}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePass ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={changePassVisibility}
          />
        }
      />
      <Button
        title="Iniciar sesion"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
