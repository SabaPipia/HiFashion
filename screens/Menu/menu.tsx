import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  Platform,
} from "react-native";

export default function Menu() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: "1",
      title: "New",
    },
    {
      id: "2",
      title: "Apparel",
    },
    {
      id: "3",
      title: "Bag",
    },
    {
      id: "4",
      title: "Shoes",
    },
    {
      id: "5",
      title: "Beauty",
    },
    {
      id: "6",
      title: "Accessories",
    },
  ];
  const handleGoBack = () => {
    navigation.goBack();
  };
  const Item = ({ title }: { title: string }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{title}</Text>
      {/* <Image
        source={require("../../assets/close.png")}
        style={{ width: 20, height: 20 }}
      /> */}
    </View>
  );
  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={handleGoBack}>
          <Image
            source={require("../../assets/close.png")}
            style={{ width: 20, height: 20 }}
          />
        </Pressable>
      </View>
      <View style={styles.headerCategory}>
        <Text style={styles.categoryText}>WOMEN</Text>
        <Text style={styles.categoryText}>MAN</Text>
        <Text style={styles.categoryText}>KIDS</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Image
            source={require("../../assets/Call.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 18 }}>(786) 713-8616</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 60 : 50,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  headerCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  categoryText: {
    fontSize: 20,
  },
  itemContainer: {
    marginVertical: 20,
  },
  itemText: {
    fontSize: 20,
  },
});
