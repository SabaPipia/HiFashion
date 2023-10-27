import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  FlatList,
  Platform,
  Dimensions,
} from "react-native";
import NewArrival from "./components/newArrival";

export default function HomeScreen({ navigation }: any) {
  const data = [{ key: "hero" }, { key: "newArrival" }];
  const screenHeight = Dimensions.get("window").height;
  const heroBackgroundHeight = screenHeight - 80;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        if (item.key === "hero") {
          return (
            <ImageBackground
              source={require("../../assets/hero.png")}
              style={{ height: heroBackgroundHeight }}
            >
              <View style={styles.heroMainTextContainer}>
                <Text style={[styles.heroMainText, { marginLeft: 0 }]}>
                  LUXURY
                </Text>
                <Text style={[styles.heroMainText, { marginLeft: 10 }]}>
                  FASHION
                </Text>
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
          );
        } else if (item.key === "newArrival") {
          return (
            <View style={styles.newArrivalContainer}>
              <NewArrival />
            </View>
          );
        }
        return null;
      }}
    />
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heroButton: {
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
  newArrivalContainer: {
    padding: 20,
    flex: 1,
  },
});
