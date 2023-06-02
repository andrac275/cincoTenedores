import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { InfoUser } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";

export function UserLoggedScreen() {
  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  return (
    <View>
      <InfoUser />

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyle}
        titleStyle={styles.btnTextStyle}
        onPress={logOut}
      />
    </View>
  );
}
