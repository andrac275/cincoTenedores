import React from "react";
import { View, Text } from "react-native";
import { styles } from "./AddReviewRestaurantScreen.styles";

export function AddReviewRestaurantScreen(props) {
  const { route } = props;
  console.log(route.params);
  return (
    <View>
      <Text>AddReviewRestaurantScreen</Text>
    </View>
  );
}
