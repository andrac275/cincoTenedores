import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const goToAddRestaurant = () => {
    //Si estamos en el mismo stack se puede hacer asi
    navigation.navigate(screen.restaurant.addRestaurant);

    //Pero si se viaja a otro stack, es recomendable hacerlo como el ejemplo comentado
    //para evitar problemas:
    //navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };
  return (
    <View>
      <Text>Estamos en la screen RestaurantsScreen</Text>
      <Button title="Crear restaurante" onPress={goToAddRestaurant}></Button>
    </View>
  );
}
