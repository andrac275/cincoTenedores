import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { size } from "lodash";
import { UserNotLogged, NotFoundRestaurants } from "../components/Favorites";
import { Loading } from "../components/Shared";
import { db } from "../utils";

export function FavoritesScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "favorites"),
      where("idUser", "==", auth.currentUser.uid)
    );

    onSnapshot(q, async (snapshot) => {
      let restaurantArray = [];
      for await (const item of snapshot.docs) {
        const data = item.data();
        const docRef = doc(db, "restaurants", data.idRestaurant);
        const docSnap = await getDoc(docRef);
        const newData = docSnap.data();
        newData.idFavorite = data.id;
        restaurantArray.push(newData);
      }

      setRestaurants(restaurantArray);
    });
  }, []);

  if (!hasLogged) return <UserNotLogged />;
  if (!restaurants) return <Loading show text="Cargando..." />;
  if (size(restaurants) === 0) return <NotFoundRestaurants />;
  return (
    <View>
      <Text>Estamos en la screen de FavoritesScreen</Text>
    </View>
  );
}
