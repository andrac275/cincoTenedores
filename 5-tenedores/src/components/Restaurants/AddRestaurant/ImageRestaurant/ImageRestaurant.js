import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "./ImageRestaurant.styles";

export function ImageRestaurant(props) {
  const { formik } = props;

  const principalImage = formik.values.images[0];
  return (
    <View style={styles.content}>
      <Image
        source={
          principalImage
            ? { uri: principalImage }
            : require("../../../../../assets/img/image-not-found.png")
        }
        style={styles.image}
      />
    </View>
  );
}
