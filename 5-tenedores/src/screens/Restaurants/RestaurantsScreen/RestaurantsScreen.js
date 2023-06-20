import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { screen } from "../../../utils";
import { styles } from "./RestaurantsScreen.styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const goToAddRestaurant = () => {
    //Si estamos en el mismo stack se puede hacer asi
    navigation.navigate(screen.restaurant.tab, {
      screen: screen.restaurant.addRestaurant,
    });

    //Pero si se viaja a otro stack, es recomendable hacerlo como el ejemplo comentado
    //para evitar problemas:
    //navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };
  return (
    <View style={styles.content}>
      <Text>Estamos en la screen RestaurantsScreen</Text>

      {currentUser && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#00a680"
          containerStyle={styles.btnContainer}
          onPress={goToAddRestaurant}
        />
      )}
    </View>
  );
}
