import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Input, Icon, Text } from "react-native-elements";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
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
      />
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Unirse</Text>
      </TouchableOpacity>
    </View>
  );
}
