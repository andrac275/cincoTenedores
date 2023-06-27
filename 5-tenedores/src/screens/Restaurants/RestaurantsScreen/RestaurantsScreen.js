import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { screen, db } from "../../../utils";
import { styles } from "./RestaurantsScreen.styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "restaurants"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapShot) => {
      setRestaurants(snapShot.docs);
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
