import React from "react";
import { View, Text } from "react-native";
import { styles } from "./RestaurantInfoScreen.styles";

export function RestaurantInfoScreen(props) {
  const { route } = props;
  console.log(route);
  return (
    <View>
      <Text>RestaurantInformationScreen</Text>
    </View>
  );
}
