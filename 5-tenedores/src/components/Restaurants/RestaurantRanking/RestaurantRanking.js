import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Rating, Icon } from "react-native-elements";
import { styles } from "./RestaurantRanking.styles";

export function RestaurantRanking(props) {
  const { restaurant, index } = props;

  return (
    <TouchableOpacity onPress={() => console.log("go to screen")}>
      <View style={styles.content}>
        <Image source={{ uri: restaurant.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Rating
            imageSize={15}
            readonly
            startingValue={restaurant.ratingMedia}
          />
        </View>
        <Text style={styles.description}>{restaurant.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
