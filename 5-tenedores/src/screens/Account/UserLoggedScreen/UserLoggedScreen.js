import React from "react";
import { View, Text } from "react-native";
import { InfoUser } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";

export function UserLoggedScreen() {
  return (
    <View>
      <InfoUser />
    </View>
  );
}