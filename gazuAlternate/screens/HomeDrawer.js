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
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useRef, useState, useCallback } from "react";
import HomeTwo from "./HomeTwo";
import ProfileScreen from "./ProfileScreen";
import RecentScreen from "./RecentScreen";
import SettingScreen from "./SettingScreen";
import PaymentScreen from "./PaymentScreen";

const Drawer = createDrawerNavigator();
export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="home"
      screenOptions={{
        headerTitle: ""
      }}
    >
      <Drawer.Screen name="home" component={HomeTwo} />
      <Drawer.Screen name="profile" component={ProfileScreen} />
      <Drawer.Screen name="payment" component={PaymentScreen} />
      <Drawer.Screen name="setting" component={SettingScreen} />
      <Drawer.Screen name="recent" component={RecentScreen} />
    </Drawer.Navigator>
  );
}
