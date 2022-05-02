import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  DrawerLayoutAndroid,
  Pressable
} from "react-native";
import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import Item from "../components/Item";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function DrawerScreen() {
  const drawer = useRef(null);
  const navigationView = () => (
    <View
      style={{
        marginTop: 100,
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 24
      }}
    >
      <Item title="Profile" name="person-outline" />
      <Item title="Cards" name="card-outline" />
      <Item title="Settings" name="settings-outline" />
      <Item title="Activites" name="time-outline" />
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <TouchableOpacity>
          <Feather name="menu" size={29} style={{ padding: 10 }} />
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
