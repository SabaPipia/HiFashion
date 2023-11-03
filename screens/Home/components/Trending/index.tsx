import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const Trending = () => {
  return (
    <View style={{ padding: 15, marginTop: 30 }}>
      <Text style={{ fontSize: 23, alignSelf: "center", marginBottom: 20 }}>
        @TRENDING
      </Text>
      <View style={{ gap: 10 }}>
        <View style={styles.mainContainer}>
          <Text style={styles.tag}>&#x23;2021</Text>
          <Text style={styles.tag}>&#x23;spring</Text>
          <Text style={styles.tag}>&#x23;collection</Text>
          <Text style={styles.tag}>&#x23;fall</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.tag}>&#x23;dress</Text>
          <Text style={styles.tag}>&#x23;automcollection</Text>
          <Text style={styles.tag}>&#x23;openfashion</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  tag: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    fontSize: 18,
    borderRadius: 30,
  },
});

export default Trending;
