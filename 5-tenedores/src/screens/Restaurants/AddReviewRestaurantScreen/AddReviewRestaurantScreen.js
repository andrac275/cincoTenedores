import React from "react";
import { View, Text } from "react-native";
import { AirbnbRating, Input, Button } from "react-native-elements";
import { styles } from "./AddReviewRestaurantScreen.styles";

export function AddReviewRestaurantScreen(props) {
  const { route } = props;

  return (
    <View style={styles.content}>
      <View style={styles.ratingContent}>
        <AirbnbRating
          count={5}
          reviews={["Pésimo", "Deficiente", "Normal", "Bueno", "Excelente"]}
          defaultRating={0}
          size={35}
          onFinishRating={(rating) => {
            console.log(rating);
          }}
        />
      </View>
      <View>
        <Input placeholder="Titulo" />
        <Input
          placeholder="Comentario"
          multiline
          inputContainerStyle={styles.comment}
        />
      </View>

      <Button
        title="Enviar comentario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
