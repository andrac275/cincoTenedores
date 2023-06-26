import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./MapForm.styles";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import { Modal } from "../../../Shared";
import MapView, { Marker } from "react-native-maps";

export function MapForm(props) {
  const { show, close } = props;
  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Tienes que ir a ajustes del movil y activar la localizacion",
        });
        return;
      }

      const locationTemp = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);

  return (
    <Modal show={show} close={close}>
      <MapView
        initialRegion={location}
        showsUserLocation={true}
        style={styles.mapStyle}
        onRegionChange={(locationTemp) => {
          setLocation(locationTemp);
        }}
      >
        <Marker draggable coordinate={location} />
      </MapView>
      <View style={styles.mapActions}>
        <Button
          title="Guardar"
          containerStyle={styles.btnMapContainerSave}
          buttonStyle={styles.btnMapSave}
        />
        <Button
          title="Cerrar"
          containerStyle={styles.btnMapContainerCancel}
          buttonStyle={styles.btnMapCancel}
        />
      </View>
    </Modal>
  );
}
