import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable
} from "react-native";
import React, { useState } from "react";
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
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Ionicons } from "@expo/vector-icons";
MapboxGL.setAccessToken(
  "pk.eyJ1IjoibWFtZW5jb2RlIiwiYSI6ImNrbmMyNDhmbzF4ZHIyd282NDJ5cDl4dmEifQ.kB0rN0t8PgA822CqczbbqQ"
);

const SIZE = Dimensions.get("window").width * 0.7;
const { width, height } = Dimensions.get("window");
export default function MapTwo() {
  const open = useSharedValue(0);
  const [visible, setvisible] = useState(false);
  const width = useSharedValue(0);
  const zin = useSharedValue(0);
  const boxWidth = useSharedValue(0);

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
    zin.value = withTiming(zin.value === 0 ? 1 : 0);
    boxWidth.value = withTiming(boxWidth.value === 0 ? SIZE - 100 : 0);
    makeVisible(open.value);
  }

  function handleClose() {
    open.value = withTiming(0);
    width.value = withTiming(0);
    boxWidth.value = withTiming(0);
    zin.value = withTiming(0);
    setTimeout(() => {
      setvisible(false);
    }, 500);
  }

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
      }),
      zIndex: withTiming(zin.value)
    };
  });
  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }}>
      <Animated.View style={[styles.bg, sty]}>
        <Animated.View style={[styles.conte, stylee]}>
          <Animated.View style={[styles.box, sty]}></Animated.View>
        </Animated.View>
        {visible && <Pressable style={styles.overly} onPress={handleClose} />}
      </Animated.View>

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
      <Pressable style={styles.btn} onPress={handleChange}>
        <Ionicons name="menu" size={34} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    width: SIZE - 100,
    height: 50
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingLeft: 20,
    position: "absolute"
    //zIndex: 15
  },
  bg: {
    height: height,
    width: width,
    position: "absolute",

    //backgroundColor: "white",
    //zIndex: 2,
    backgroundColor: "rgba(0,0,0,.1)"
  },
  conte: {
    position: "absolute",
    height: height,
    backgroundColor: "blue",
    //zIndex: 5,
    alignItems: "center",
    justifyContent: "center",
    width: SIZE
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
    //backgroundColor: "red"
    // zIndex: -2
  }
});
