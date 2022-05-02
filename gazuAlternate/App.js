import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
//eas build --profile development --platform android
import { PersistGate } from "redux-persist/integration/react";
//import "react-native-gesture-handler";
import AppRoute from "./screens/AppRoute";
import DoubleTapToClose from "./DoubleTabToClose";
import store, { persistor } from "./store";

const LoadingMarkup = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center"
    }}
  >
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);
export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <AppRoute />
        {/* <DoubleTapToClose /> */}
        <StatusBar style="auto" />
      </PersistGate>
    </ReduxProvider>
  );
}


//eas build -p android --profile preview