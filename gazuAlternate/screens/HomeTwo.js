import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  DrawerLayoutAndroid,
  Pressable,
  Button
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Item from "../components/Item";

import React, { useRef, useState, useCallback } from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Feather } from "@expo/vector-icons";
//import DrawerScreen from "./DrawerScreen";
MapboxGL.setAccessToken(
  "pk.eyJ1IjoibWFtZW5jb2RlIiwiYSI6ImNrbmMyNDhmbzF4ZHIyd282NDJ5cDl4dmEifQ.kB0rN0t8PgA822CqczbbqQ"
);

const { width, height } = Dimensions.get("window");

export default function HomeTwo() {
  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }}>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={10}
        centerCoordinate={[38.763611, 9.005401]}
        showUserLocation={true}
        style={{ width: width, height: height }}
      >
        <MapboxGL.Camera
          zoomLevel={13}
          centerCoordinate={[38.763611, 9.005401]}
        ></MapboxGL.Camera>
      </MapboxGL.MapView>
    </View>
  );
}
