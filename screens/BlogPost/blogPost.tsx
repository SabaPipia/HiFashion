import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../../types/types";
import Footer from "../../components/footer";
interface ItemType {
  id: number;
  source: any;
}
type BlogPostScreenRouteProp = RouteProp<StackParamList, "BlogPost">;

const BlogPost = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const route = useRoute<BlogPostScreenRouteProp>();
  const postId = route.params.postId;
  const images: ItemType[] = [
    { id: 1, source: require("../../assets/DummyProductImage.png") },
    { id: 2, source: require("../../assets/DummyProductImage.png") },
    { id: 3, source: require("../../assets/DummyProductImage.png") },
    { id: 4, source: require("../../assets/DummyProductImage.png") },
    { id: 5, source: require("../../assets/DummyProductImage.png") },
  ];

  const renderItem = ({ item }: { item: ItemType }) => (
    <View style={styles.itemContainer}>
      <Image source={item.source} style={styles.carouselImage} />
    </View>
  );
  return (
    <>
      <ScrollView>
        <Image
          style={styles.mainImage}
          source={require("../../assets/BlogImage.png")}
        />
        <View style={styles.container}>
          <Text style={styles.headerText}>
            2021 Style Guide: The Biggest Fall Trends
          </Text>
          <Text>{postId}</Text>
          <Text style={styles.mainParagraph}>
            You guys know how much I love mixing high and low-end - it's the
            best way to get the most bang for your buck while still elevating
            your wardrobe. The same goes for handbags! And honestly they are
            probably the best pieces to mix and match. I truly think the key to
            completing a look is with a great bag and I found so many this year
            that I wanted to share a round-up of my most worn handbags.
          </Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.mainParagraph}>
            I found this{" "}
            <Text style={{ color: "#DD8560" }}>
              Saint Laurent canvas handbag
            </Text>{" "}
            this summer and immediately fell in love. The neutral fabrics are so
            beautiful and I like how this handbag can also carry into fall. The
            mini Fendi bucket bag with the sheer fabric is so fun and such a
            statement bag. Also this DeMellier off white bag is so cute to carry
            to a dinner with you or going out, it's small but not too small to
            fit your phone and keys still.
          </Text>
          <Text style={{ marginTop: 10, fontSize: 17, fontWeight: "300" }}>
            Posted by OpenFashion | 3 Days ago
          </Text>
          <View style={styles.blogTagsContainer}>
            <Text style={styles.blogTags}>#Fashion</Text>
            <Text style={styles.blogTags}>#Tips</Text>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
};

export default BlogPost;
const styles = StyleSheet.create({
  mainImage: {
    width: "100%",
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  itemContainer: {
    width: 300,
    marginRight: 20,
  },
  carouselImage: {
    width: "100%",
    height: 400,
  },
  headerText: {
    fontSize: 18,
    textTransform: "uppercase",
  },
  mainParagraph: {
    fontSize: 17,
    fontWeight: "300",
    lineHeight: 22,
    marginTop: 10,
  },
  blogTagsContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
  blogTags: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Platform.OS === "ios" ? 14 : 30,
    borderWidth: 1,
    borderColor: "#c2bfbf",
    overflow: "hidden",
    backgroundColor: "#fff",
    color: "#777",
    fontSize: 15,
    letterSpacing: 1,
  },
});
