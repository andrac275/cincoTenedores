import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { db } from "../../../utils";
import {
  doc,
  onSnapshot,
  query,
  collection,
  where,
  orderBy,
} from "firebase/firestore";
import { Carousel, Loading } from "../../../components/Shared";
import { styles } from "./RestaurantInfoScreen.styles";

const { width } = Dimensions.get("window");

export function RestaurantInfoScreen(props) {
  const { route } = props;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setRestaurant(null);
    onSnapshot(doc(db, "restaurants", route.params.id), (doc) => {
      setRestaurant(doc.data());
    });
  }, [route.params.id]);

  if (!restaurant) return <Loading show text="Cargando restaurante" />;

  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={restaurant.images} height={250} width={width} />
    </ScrollView>
  );
}
