import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Devider from "../../../../components/devider";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BLOG</Text>
      <Devider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "300",
    marginTop: 30,
    marginBottom: 10,
  },
});
