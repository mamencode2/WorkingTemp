import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  UIManager,
  LayoutAnimation,
  Pressable,
  Platform
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Item({ title, name }) {
  const navigation = useNavigation();
  const navTo = title.toLowerCase();
  const gotoScreen = () => {
    navigation.navigate(`${navTo}`);
  };
  return (
    <Pressable style={styles.container} onPress={gotoScreen}>
      <Ionicons name={name} size={24} color="black" />

      <Text style={styles.name}>{title}</Text>

      <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 250,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "white"
  },
  name: {
    color: "#303030",
    lineHeight: 19,
    fontSize: 20,

    fontWeight: "bold"
  }
});
