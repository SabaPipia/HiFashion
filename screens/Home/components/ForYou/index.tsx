import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

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
  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={({ item }: { item: ItemType }) => (
          <View style={styles.item}>
            <ParallaxImage
              source={item.source}
              containerStyle={styles.imageContainer}
              style={styles.carouselImage}
              parallaxFactor={0.4}
            />
            <Text>Cloth</Text>
            <Text>$120</Text>
          </View>
        )}
        sliderWidth={300}
        itemWidth={200}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: 200,
    height: 300,
  },
  imageContainer: {
    flex: 1,
  },
  carouselImage: {
    width: 200,
    height: 300,
  },
});

export default CustomCarousel;
