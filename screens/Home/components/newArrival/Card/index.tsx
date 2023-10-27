import React from "react";
import { StyleSheet, View, Image, Text, Platform } from "react-native";

export default function Card({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  return (
    <View style={{ flex: 1, alignItems: "center", gap: 3 }}>
      <Image
        style={{ width: "100%", objectFit: "cover" }}
        source={require("../../../../../assets/DummyProductImage.png")}
      />
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
        }}
      >
        {selectedCategory}
      </Text>
      <Text
        style={{
          color: "#DD8560",
          fontSize: Platform.OS === "ios" ? 24 : 18,
          fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
        }}
      >
        $83
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
