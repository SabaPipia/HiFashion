import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Devider from "../../../../components/devider";

export default function Collections() {
  return (
    <View>
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
