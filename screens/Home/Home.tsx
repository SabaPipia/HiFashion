import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { Dimensions } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("../../assets/hero.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.heroMainTextContainer}>
          <Text style={[styles.heroMainText, { marginLeft: 0 }]}>LUXURY</Text>
          <Text style={[styles.heroMainText, { marginLeft: 10 }]}>FASHION</Text>
          <Text style={[styles.heroMainText, { marginLeft: 15 }]}>
            & ACCESSORIES
          </Text>
        </View>
        <View style={styles.overlay}>
          <Pressable
            style={styles.heroButton}
            onPress={() => navigation.navigate("Second")}
          >
            <Text style={styles.buttonText}>EXPLORE COLLECTION</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heroButton: {
    width: "auto",
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 25,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Dimensions.get("window").height <= 600 ? 40 : 120,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: 3,
  },
  heroMainTextContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    marginLeft: 30,
  },
  heroMainText: {
    fontSize: Dimensions.get("window").height <= 600 ? 30 : 40,
    color: "gray",
    fontStyle: "italic",
    fontFamily: Platform.OS === "ios" ? "Didot" : "serif",
  },
});
