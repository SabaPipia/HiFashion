import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Devider from "../../../../components/devider";

interface ItemType {
  id: number;
  source: any;
}
const CustomCarousel = () => {
  const images: ItemType[] = [
    { id: 1, source: require("../../../../assets/DummyProductImage.png") },
    { id: 2, source: require("../../../../assets/DummyProductImage.png") },
    { id: 3, source: require("../../../../assets/DummyProductImage.png") },
    { id: 4, source: require("../../../../assets/DummyProductImage.png") },
    { id: 5, source: require("../../../../assets/DummyProductImage.png") },
  ];

  const renderItem = ({ item }: { item: ItemType }) => (
    <View style={styles.itemContainer}>
      <Image source={item.source} style={styles.carouselImage} />
      <Text style={styles.text}>Cloth</Text>
      <Text style={[styles.text, { color: "#DD8560" }]}>$120</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.header}>JUST FOR YOU</Text>
        <Devider />
      </View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "300",
    letterSpacing: 5,
    marginBottom: 15,
  },
  itemContainer: {
    width: 250,
    margin: 10,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
  },
  carouselImage: {
    width: "100%",
    height: 300,
  },
});

export default CustomCarousel;
