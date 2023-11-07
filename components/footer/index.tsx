import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Devider from "../devider";

export default function Footer({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../assets/twitter.png")}
        />
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../assets/insta.png")}
        />
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../assets/youtube.png")}
        />
      </View>
      <Devider />
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Support@HiFashion.com</Text>
        <Text style={styles.contactText}>+60 825 876</Text>
        <Text style={styles.contactText}>08:00 - 22:00 - Everyday</Text>
      </View>
      <Devider />
      <View style={styles.routerCountainer}>
        <Pressable onPress={() => navigation.navigate("About")}>
          <Text style={styles.navigationText}>About</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("About")}>
          <Text style={styles.navigationText}>Contact</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("About")}>
          <Text style={styles.navigationText}>Blog</Text>
        </Pressable>
      </View>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>
          Copyright &copy; HiFashion All Rights Reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 30,
  },
  contactContainer: {
    // marginTop: 10,
    gap: 6,
    marginVertical: 20,
  },
  contactText: {
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 1,
  },
  routerCountainer: {
    flexDirection: "row",
    gap: 80,
    marginTop: 20,
  },
  navigationText: {
    fontSize: 20,
  },
  copyrightContainer: {
    marginVertical: 20,
  },
  copyrightText: {
    fontSize: 16.5,
    color: "#555555",
  },
});
