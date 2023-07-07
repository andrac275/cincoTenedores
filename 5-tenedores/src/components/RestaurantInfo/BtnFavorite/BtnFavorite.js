import React, { useState, useEffect } from "react";
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
import { size } from "lodash";
import { styles } from "./BtnFavorite.styles";

export function BtnFavorite(props) {
  const { idRestaurant } = props;
  const auth = getAuth();
  const [isFavorite, setIsFavorite] = useState(undefined);

  useEffect(() => {
    //Esto es una funcion anonima autoejecutable
    (async () => {
      const response = await getFavorites();
      if (size(response)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    })();
  }, [idRestaurant]);

  const getFavorites = async () => {
    const q = query(
      collection(db, "favorites"),
      where("idRestaurant", "==", idRestaurant),
      where("idUser", "==", auth.currentUser.uid)
    );

    const result = await getDocs(q);
    return result.docs;
  };

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

  const removeFavorite = async () => {
    console.log("borrando favorito");
  };

  return (
    <View style={styles.content}>
      {isFavorite !== undefined && (
        <Icon
          type="material-community"
          name={isFavorite ? "heart" : "heart-outline"}
          color={isFavorite ? "#f00" : "#000"}
          size={35}
          onPress={isFavorite ? removeFavorite : addFavorite}
        />
      )}
    </View>
  );
}
