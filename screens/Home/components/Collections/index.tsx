import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Collections() {
  return (
    <View style={{ marginTop: 70 }}>
      <Image
        style={{ width: "100%", objectFit: "cover" }}
        source={require("../../../../assets/collections.png")}
      />
      <Image
        style={{ alignSelf: "center", marginVertical: 40 }}
        source={require("../../../../assets/collections1.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
