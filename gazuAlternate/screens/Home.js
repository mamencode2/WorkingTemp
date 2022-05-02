import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MapTwo from "../components/MapTwo";
import ModalComponent from "../components/ModalComponent";

export default function Home({ navigation }) {
  return (
    <View>
      <ModalComponent />
      <Text>Hello world</Text>
      {/* <MapTwo /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
