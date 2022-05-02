import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, Platform, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomDrawer from "../components/CustomDrawer";
import HomeTwo from "./HomeTwo";
import ProfileScreen from "./ProfileScreen";
import RecentScreen from "./RecentScreen";
import SettingScreen from "./SettingScreen";
import PaymentScreen from "./PaymentScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="home"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "transparent"
        },
        headerTitle: " ",
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto-Medium",
          fontSize: 15
        },
        headerLeft: (props) => (
          <>
            <Pressable style={styles.wrapper} onPress={navigation.toggleDrawer}>
              <Ionicons
                name={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                size={32}
                color={"#000"}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          </>
        )
      })}
    >
      <Drawer.Screen
        name="home"
        component={HomeTwo}
        options={{
          headerStyle: {
            backgroundColor: "transparent"
          },
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="recent"
        component={RecentScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="payment"
        component={PaymentScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="card-outline" size={22} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
const styles = StyleSheet.create({
  drawer: {
    fontSize: 22,
    color: "red"
  },
  wrapper: {
    marginLeft: 10,
    padding: 5
  }
});
