import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import Devider from "../../../../components/devider";

interface ItemType {
  id: number;
  source: any;
}
const CustomCarousel = () => {
  const windowWidth = Dimensions.get("window").width;
  const images: ItemType[] = [
    { id: 1, source: require("../../../../assets/DummyProductImage.png") },
    { id: 2, source: require("../../../../assets/DummyProductImage.png") },
    { id: 3, source: require("../../../../assets/DummyProductImage.png") },
    { id: 4, source: require("../../../../assets/DummyProductImage.png") },
    { id: 5, source: require("../../../../assets/DummyProductImage.png") },
  ];
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.header}>JUST FOR YOU</Text>
        <Devider />
      </View>
      <Carousel
        data={images}
        layout={"default"}
        renderItem={({ item, index }: { item: ItemType; index: number }) => (
          <View key={index}>
            <Image source={item.source} style={styles.carouselImage} />
            <Text style={styles.text}>Cloth</Text>
            <Text style={[styles.text, { color: "#DD8560" }]}>$120</Text>
          </View>
        )}
        sliderWidth={windowWidth}
        itemWidth={200}
        itemHeight={600}
        keyExtractor={(item) => item.id.toString()}
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
  imageContainer: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
  },

  carouselImage: {
    width: "100%",
    objectFit: "fill",
    height: 200,
  },
});

export default CustomCarousel;
