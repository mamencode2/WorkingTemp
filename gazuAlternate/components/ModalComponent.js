import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Animated,
  Dimensions,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button
} from "react-native";
import Item from "./Item";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function ModalComponent() {
  const [str, setStr] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const offsetX = useRef(new Animated.Value(0)).current;

  const getIn = () => {
    Animated.parallel([
      Animated.timing(offsetX, {
        toValue: 1
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000
      })
    ]).start();
    setStr(1);
    // Will change fadeAnim value to 1 in 5 seconds
  };

  const getOut = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000
      }),
      Animated.timing(offsetX, {
        toValue: -300
      })
    ]).start();
    // Will change fadeAnim value to 1 in 5 seconds

    setStr(0);
  };

  const ItemLists = () => {
    return (
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={{ margin: 20, zIndex: 100 }}
        onPress={str === 0 ? getIn : getOut}
      >
        <Feather name="menu" size={29} style={{ padding: 10 }} />
      </Pressable>

      <Animated.View
        style={[
          styles.box,
          { opacity: fadeAnim, transform: [{ translateX: offsetX }] }
        ]}
      >
        <ItemLists />
      </Animated.View>
      {str === 1 && (
        <TouchableOpacity
          style={styles.overlays}
          onPress={getOut}
        ></TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlays: {
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
    backgroundColor: "rgba(0,0,0, 0.2)",

    position: "absolute"
  },
  box: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    height: deviceHeight,
    width: deviceWidth * 0.75,
    backgroundColor: "#5256E8"
  }
});
