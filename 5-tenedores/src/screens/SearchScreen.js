import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text, SearchBar, ListItem, Avatar, Icon } from "react-native-elements";
import {
  query,
  collection,
  getDocs,
  startAt,
  endAt,
  limit,
  orderBy,
} from "firebase/firestore";
import { db, screen } from "../utils/";
import { size, map } from "lodash";
import { Loading } from "../components/Shared";
import { useNavigation } from "@react-navigation/native";

export function SearchScreen() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const goToRestaurant = (idRestaurant) => {
    console.log("first");
    navigation.navigate(screen.restaurant.tab, {
      screen: screen.restaurant.restaurantInfo,
      params: { id: idRestaurant },
    });
  };

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "restaurants"),
        orderBy("name"),
        startAt(searchText),
        endAt(`${searchText}\uf8ff`),
        limit(20)
      );

      const querySnapshot = await getDocs(q);
      setSearchResults(querySnapshot.docs);
    })();
  }, [searchText]);

  return (
    <>
      <SearchBar
        placeholder="Busca tu restaurante"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {!searchResults && <Loading show text="Cargando..." />}

      <ScrollView>
        {size(searchResults) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>No se han encontrado resultados</Text>
          </View>
        ) : (
          map(searchResults, (item) => {
            const data = item.data();

            return (
              <ListItem
                key={data.id}
                bottomDivider
                onPress={() => goToRestaurant(data.id)}
              >
                <Avatar source={{ uri: data.images[0] }} rounded />
                <ListItem.Content>
                  <ListItem.Title>{data.name}</ListItem.Title>
                </ListItem.Content>
                <Icon type="material-community" name="chevron-right" />
              </ListItem>
            );
          })
        )}
      </ScrollView>
    </>
  );
}
