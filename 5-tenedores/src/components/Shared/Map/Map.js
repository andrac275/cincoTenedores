import React from "react";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./Map.styles";

export function Map(props) {
  const { location, name } = props;

  return (
    <MapView style={styles.content} initialRegion={location}>
      <Marker coordinate={location} />
    </MapView>
  );
}
