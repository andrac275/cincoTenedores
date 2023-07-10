import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Rating, Icon } from "react-native-elements";
import { styles } from "./RestaurantRanking.styles";

export function RestaurantRanking(props) {
  const { restaurant, index } = props;

  const renderMedal = () => {
    if (index > 2) return null; // que no muestre mas de 3 medallas. A partir de la 4a, no lo muestra
    let color = "";
    if (index === 0) {
      color = "#FFD700"; //oro
    } else if (index === 1) {
      color = "#BEBEBE"; //plata
    } else if (index === 2) {
      color = "#CD7F32"; //bronbze
    }

    return (
      <Icon
        type="material-community"
        name="medal-outline"
        color={color}
        style={styles.medal}
      />
    );
  };

  return (
    <TouchableOpacity onPress={() => console.log("go to screen")}>
      <View style={styles.content}>
        <Image source={{ uri: restaurant.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <View style={styles.nameContent}>
            {renderMedal()}
            <Text style={styles.name}>{restaurant.name}</Text>
          </View>
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
