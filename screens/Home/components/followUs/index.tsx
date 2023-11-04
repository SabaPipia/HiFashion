import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Devider from "../../../../components/devider";

export default function FollowUs() {
  return (
    <View>
      <Text style={styles.header}>FOLLOW US</Text>
      <Image
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        source={require("../../../../assets/instagram.png")}
      />
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <View style={{ position: "relative" }}>
            <Image
              style={{ width: "100%" }}
              source={require("../../../../assets/instagram/mia.png")}
            />
            <View style={styles.overlay} />
            <Text style={styles.instagramName}>@mia</Text>
          </View>
          <View style={{ position: "relative" }}>
            <Image
              style={{ width: "100%" }}
              source={require("../../../../assets/instagram/mia2.png")}
            />
            <View style={styles.overlay} />
            <Text style={styles.instagramName}>@mia</Text>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={{ position: "relative" }}>
            <Image
              style={{ width: "100%" }}
              source={require("../../../../assets/instagram/jihyn.png")}
            />
            <View style={styles.overlay} />
            <Text style={styles.instagramName}>@_jihyn</Text>
          </View>
          <View style={{ position: "relative" }}>
            <Image
              style={{ width: "100%" }}
              source={require("../../../../assets/instagram/jihyn2.png")}
            />
            <View style={styles.overlay} />
            <Text style={styles.instagramName}>@_jihyn</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 25,
  },
  container: {
    padding: 20,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    gap: 20,
  },
  cardWrapper: {
    gap: 20,
    flex: 1,
  },
  instagramName: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 18,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // 0.3 sets the transparency
    width: "100%",
    height: "100%",
  },
});
