import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Image
} from "react-native";
import React, { useState } from "react";
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate
} from "react-native-reanimated";
//import {} from "react-native";
import { app, auth, db } from "../firebaseConfig";
import MapTwo from "../components/MapTwo";
import TheDrawer from "../components/TheDrawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { setSignOut } from "../redux/authSlice";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoibWFtZW5jb2RlIiwiYSI6ImNrbmMyNDhmbzF4ZHIyd282NDJ5cDl4dmEifQ.kB0rN0t8PgA822CqczbbqQ"
);
const { width, height } = Dimensions.get("window");
const SIZE = Dimensions.get("window").width * 0.7;
export default function HomeScreen() {
  const open = useSharedValue(0);
  const [visible, setvisible] = useState(false);
  const width = useSharedValue(0);
  const offset = useSharedValue(0);
  const boxWidth = useSharedValue(0);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }}>
      <View></View>
      {/*
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
      </MapboxGL.MapView>*/}
      <MapTwo />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingLeft: 20,
    position: "absolute",
    height: 40,
    width: 40
    // backgroundColor: "transparent"
  }
});
