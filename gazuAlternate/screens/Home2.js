import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  Dimensions,
  Animated
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { app, auth, db } from "../firebaseConfig";
import { setSignOut } from "../redux/authSlice";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { useDispatch, useSelector } from "react-redux";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoibWFtZW5jb2RlIiwiYSI6ImNrbmMyNDhmbzF4ZHIyd282NDJ5cDl4dmEifQ.kB0rN0t8PgA822CqczbbqQ"
);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//import { Ionicons } from '@expo/vector-icons';
//<Ionicons name="card-outline" size={24} color="black" />

const routes = [
  {
    nav: "profile",
    icon: "person-outline"
  },
  { nav: "setting", icon: "settings-outline" },
  { nav: "activity", icon: "time-outline" },
  { nav: "payment", icon: "card-outline" }
];

export default function HomeScreen({ navigation }) {
  const [isOpen, setOpen] = useState(false);
  const [op, setOp] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  function handleOpen() {
    setTimeout(() => {
      setOp(1);
      setOpen(true);
    }, 500);
  }
  function handleClose() {
    setTimeout(() => {
      setOp(0);
      setOpen(false);
    }, 500);
  }

  function handleNavi(navto) {
    setOpen(false);

    navigation.navigate(`${navto}`);
  }

  const Item = ({ list }) => {
    return (
      <Pressable
        style={styles.listwrapper}
        onPress={() => handleNavi(list.nav)}
      >
        <Text style={styles.text}>{list.nav}</Text>

        <Ionicons name={list.icon} size={30} color="black" />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="light" /> */}

      {!isOpen && (
        <Pressable onPress={handleOpen} style={styles.ic}>
          <Feather name="menu" size={34} color="black" />
        </Pressable>
      )}

      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={10}
        centerCoordinate={[38.763611, 9.005401]}
        showUserLocation={true}
        style={{ flex: 1 }}
      >
        <MapboxGL.Camera
          zoomLevel={13}
          centerCoordinate={[38.763611, 9.005401]}
        ></MapboxGL.Camera>
      </MapboxGL.MapView>

      {isOpen && (
        <>
          <Pressable style={styles.overlay} onPress={handleClose} />

          <View style={styles.drawer}>
            {routes.map((list) => (
              <Item key={list.nav} list={list} />
            ))}
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listwrapper: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  drawer: {
    position: "absolute",
    left: 0,
    width: windowWidth * 0.7,
    backgroundColor: "green",
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  ic: {
    paddingTop: 30,
    paddingLeft: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
