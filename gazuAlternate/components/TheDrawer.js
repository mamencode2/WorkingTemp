import Constants from "expo-constants";
import React, { useState } from "react";

import {
  Button,
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ImageBackground,
  Image
} from "react-native";

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

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { setSignOut } from "../redux/authSlice";

const SIZE = Dimensions.get("window").width * 0.7;

const { width, height } = Dimensions.get("window");

export default function TheDrawer() {
  const open = useSharedValue(0);
  const [visible, setvisible] = useState(false);
  const width = useSharedValue(0);
  const offset = useSharedValue(0);
  const boxWidth = useSharedValue(0);
  const dispatch = useDispatch();

  const animatiotyles = useAnimatedStyle(() => {
    return {
      width: withTiming(boxWidth.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1)
      })
    };
  });
  const stylee = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1)
      }),
      opacity: withTiming(open.value, {
        duration: 500
        //easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    };
  });
  const sty = useAnimatedStyle(() => {
    return {
      opacity: withTiming(open.value, {
        duration: 500
        //easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    };
  });
  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(setSignOut());
    // sign out function from firebase
    auth.signOut();
  };

  function makeVisible(value) {
    if (value === 0) {
      setTimeout(() => {
        console.log("timeoutworking");
        setvisible(true);
      }, 500);
      //
    } else {
      setTimeout(() => {
        setvisible(false);
      }, 500);
    }
  }
  function handleChange() {
    open.value = withTiming(open.value === 1 ? 0 : 1);
    width.value = withTiming(width.value === 0 ? SIZE : 0);
    boxWidth.value = withTiming(boxWidth.value === 0 ? SIZE - 100 : 0);
    makeVisible(open.value);
  }

  function handleClose() {
    open.value = withTiming(0);
    width.value = withTiming(0);
    boxWidth.value = withTiming(0);
    setTimeout(() => {
      setvisible(false);
    }, 500);
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleChange} style={styles.btn}>
        <Ionicons
          name="ios-menu"
          size={34}
          style={{ color: open.value === 1 ? "white" : "black" }}
        />
      </TouchableOpacity>

      <Animated.View style={[styles.bg, sty]}>
        <Animated.View style={[styles.conte, stylee]}>
          <Animated.View style={[styles.box, sty]}>
            <Text>Hello world</Text>
          </Animated.View>
        </Animated.View>
        {visible && <Pressable style={styles.overly} onPress={handleClose} />}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 20,
    position: "absolute",
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  overly: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,.1)"
    // zIndex: -2
  },

  conte: {
    height: height,
    backgroundColor: "blue",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  bg: {
    height: height,
    width: width,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,.1)",
    zIndex: -5
  },
  box: {
    backgroundColor: "white",
    width: SIZE - 100,
    height: 50
  }
});
