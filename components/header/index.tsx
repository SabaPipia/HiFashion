import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Platform, Image, Pressable } from "react-native";
import { NavigationProps } from "../../types/headerTypes";

export default function Header() {
  const navigation = useNavigation<NavigationProps>();
  const navigateToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/burgerLogo.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <View>
        <Pressable onPress={navigateToHome}>
          <Image
            source={require("../../assets/Logo.png")}
            style={{ marginLeft: 30 }}
          />
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={require("../../assets/search.png")}
          style={{ width: 40, height: 40 }}
        />
        <Image
          source={require("../../assets/shoppingBag.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 40 : 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
