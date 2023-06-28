import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { db } from "../../../utils";
import {
  doc,
  onSnapshot,
  query,
  collection,
  where,
  orderBy,
} from "firebase/firestore";
import { styles } from "./RestaurantInfoScreen.styles";

export function RestaurantInfoScreen(props) {
  const { route } = props;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setRestaurant(null);
    onSnapshot(doc(db, "restaurants", route.params.id), (doc) => {
      setRestaurant(doc.data());
    });
  }, [route.params.id]);

  return (
    <View>
      <Text>RestaurantInformationScreen</Text>
    </View>
  );
}
