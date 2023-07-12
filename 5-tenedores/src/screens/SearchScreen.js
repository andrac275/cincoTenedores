import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text, SearchBar, ListItem, Avatar, Icon } from "react-native-elements";
import { Loading } from "../components/Shared";

export function SearchScreen() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchBar
        placeholder="Busca tu restaurante"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {!searchResults && <Loading show text="Cargando..." />}
    </>
  );
}
