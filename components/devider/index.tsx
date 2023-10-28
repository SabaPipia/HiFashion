import React from "react";
import { StyleSheet, View } from "react-native";

export default function Devider() {
  return (
    <View style={styles.devider}>
      <View style={styles.deviderBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  devider: {
    width: 200,
    height: 1,
    backgroundColor: "#c2c2c2",
    alignSelf: "center",
    marginBottom: 10,
    position: "relative",
  },
  deviderBox: {
    width: 10,
    height: 10,
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderBlockColor: "black",
    alignSelf: "center",
    position: "absolute",
    transform: [{ rotate: "45deg" }, { translateY: -6 }],
  },
});
