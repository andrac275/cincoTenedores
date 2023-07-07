import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  getDocs,
  query,
  where,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../utils";
import { UUID } from "uuidjs";
import { styles } from "./BtnFavorite.styles";

export function BtnFavorite(props) {
  const { idRestaurant } = props;
  const auth = getAuth();

  const addFavorite = async () => {
    try {
      const idFavorite = UUID.generate();
      const data = {
        id: idFavorite,
        idRestaurant: idRestaurant,
        idUser: auth.currentUser.uid,
      };

      await setDoc(doc(db, "favorites", idFavorite), data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.content}>
      <Icon
        type="material-community"
        name="heart-outline"
        color="#000"
        size={35}
        onPress={addFavorite}
      />
    </View>
  );
}
