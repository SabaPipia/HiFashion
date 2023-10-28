import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

export default function CompanyLogos() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/Prada.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../../../assets/Catier.png")}
        />
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/Burberry.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../../../assets/Gucci.png")}
        />
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/Boss.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../../../assets/Tiffany-Co.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  innerContainer: {
    gap: 20,
    justifyContent: "space-between",
    alignContent: "center",
  },
  image: {
    alignSelf: "center",
  },
});
