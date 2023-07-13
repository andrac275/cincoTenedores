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
import { db } from "../utils/";
import { size, map } from "lodash";
import { Loading } from "../components/Shared";

export function SearchScreen() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchText, setSearchText] = useState("");

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
                onPress={() => console.log("go to restaurant")}
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
