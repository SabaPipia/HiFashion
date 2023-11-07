import { NavigationAction } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function SecondScreen({
  navigation,
}: {
  navigation: NavigationAction;
}) {
  return (
    <View style={styles.container}>
      <Text>This is About </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
