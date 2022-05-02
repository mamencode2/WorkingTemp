import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Home from "./Home";
import DrawerNav from "./DrawerNav";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import RecentScreen from "./RecentScreen";
import SettingScreen from "./SettingScreen";
import PaymentScreen from "./PaymentScreen";
import HomeDrawer from "./HomeDrawer";
import Home2 from "./Home2";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home2}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="setting" component={SettingScreen} />
      <Stack.Screen name="activity" component={RecentScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
