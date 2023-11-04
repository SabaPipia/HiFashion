import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Devider from "../../../../components/devider";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HiFashion</Text>
      <Text style={styles.headerText}>
        Making a luxurious lifestyle accessible for a generous group of women is
        our daily drive.
      </Text>
      <Devider />
      <View style={styles.mainContainer}>
        <View style={styles.cardWrapper}>
          <View>
            <Image
              style={{ alignSelf: "center" }}
              source={require("../../../../assets/shipping.png")}
            />
            <Text style={styles.cardText}>
              Fast shipping. Free on orders over $25.
            </Text>
          </View>
          <View>
            <Image
              style={{ alignSelf: "center" }}
              source={require("../../../../assets/design.png")}
            />
            <Text style={styles.cardText}>
              Unique designs and high-quality materials.
            </Text>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View>
            <Image
              style={{ alignSelf: "center" }}
              source={require("../../../../assets/finish.png")}
            />
            <Text style={styles.cardText}>
              Unique designs and high-quality materials.
            </Text>
          </View>
          <View>
            <Image
              style={{ alignSelf: "center" }}
              source={require("../../../../assets/price.png")}
            />
            <Text style={styles.cardText}>
              Fast shipping. Free on orders over $25.
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={{ alignSelf: "center", marginTop: 20, marginBottom: 40 }}
        source={require("../../../../assets/someLogo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9e9e9",
  },
  header: {
    fontSize: 28,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  headerText: {
    width: "60%",
    alignSelf: "center",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 14,
    marginBottom: 20,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 10,
    gap: 20,
  },
  cardText: {
    textAlign: "center",
    lineHeight: 19,
  },
  cardWrapper: {
    flex: 0.5,
    gap: 10,
  },
});
