import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { Pressable } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
import { NavigationProps } from "../../../../types/types";

export default function MainContent() {
  const data = ["Fashion", "Promo", "Policy", "Lookbook", "Sale"];
  const navigation = useNavigation<NavigationProps>();
  const navigateToBlogPost = (postId: string) => {
    // Navigate to the BlogPost screen with the postId as a parameter
    navigation.navigate("BlogPost", { postId });
  };
  return (
    <View style={styles.container}>
      <View style={styles.collectionContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          style={{ marginVertical: 10 }}
          renderItem={({ item }) => {
            return <Text style={styles.collectionTags}>{item}</Text>;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.mainBlogPostContainer}>
          <Pressable onPress={() => navigateToBlogPost("პირველი პოსტი")}>
            <View style={styles.blogPost}>
              <ImageBackground
                source={require("../../../../assets/BlogImage.png")}
                style={styles.image}
              >
                <View style={styles.linearGradient} />
                <View style={styles.blogPostPictureText}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    2021 Style Guide: The Biggest
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    Fall Trends
                  </Text>
                </View>
                <Image
                  style={styles.bookmarkIcon}
                  source={require("../../../../assets/Bookmark.png")}
                />
              </ImageBackground>
            </View>
            <View style={styles.blogPostFooter}>
              <View style={styles.blogTagsContainer}>
                <Text style={styles.blogTags}>#Fashion</Text>
                <Text style={styles.blogTags}>#Tips</Text>
              </View>
              <Text style={{ fontSize: 15, color: "#777" }}>3 days ago</Text>
            </View>
          </Pressable>
          <View>
            <View style={styles.blogPost}>
              <ImageBackground
                source={require("../../../../assets/BlogImage.png")}
                style={styles.image}
              >
                <View style={styles.linearGradient} />
                <View style={styles.blogPostPictureText}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    2021 Style Guide: The Biggest
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    Fall Trends
                  </Text>
                </View>
                <Image
                  style={styles.bookmarkIcon}
                  source={require("../../../../assets/Bookmark.png")}
                />
              </ImageBackground>
            </View>
            <View style={styles.blogPostFooter}>
              <View style={styles.blogTagsContainer}>
                <Text style={styles.blogTags}>#Fashion</Text>
                <Text style={styles.blogTags}>#Tips</Text>
              </View>
              <Text style={{ fontSize: 15, color: "#777" }}>3 days ago</Text>
            </View>
          </View>
          <View>
            <View style={styles.blogPost}>
              <ImageBackground
                source={require("../../../../assets/BlogImage.png")}
                style={styles.image}
              >
                <View style={styles.linearGradient} />
                <View style={styles.blogPostPictureText}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    2021 Style Guide: The Biggest
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    Fall Trends
                  </Text>
                </View>
                <Image
                  style={styles.bookmarkIcon}
                  source={require("../../../../assets/Bookmark.png")}
                />
              </ImageBackground>
            </View>
            <View style={styles.blogPostFooter}>
              <View style={styles.blogTagsContainer}>
                <Text style={styles.blogTags}>#Fashion</Text>
                <Text style={styles.blogTags}>#Tips</Text>
              </View>
              <Text style={{ fontSize: 15, color: "#777" }}>3 days ago</Text>
            </View>
          </View>
          <View>
            <View style={styles.blogPost}>
              <ImageBackground
                source={require("../../../../assets/BlogImage.png")}
                style={styles.image}
              >
                <View style={styles.linearGradient} />
                <View style={styles.blogPostPictureText}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    2021 Style Guide: The Biggest
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 19 }}>
                    Fall Trends
                  </Text>
                </View>
                <Image
                  style={styles.bookmarkIcon}
                  source={require("../../../../assets/Bookmark.png")}
                />
              </ImageBackground>
            </View>
            <View style={styles.blogPostFooter}>
              <View style={styles.blogTagsContainer}>
                <Text style={styles.blogTags}>#Fashion</Text>
                <Text style={styles.blogTags}>#Tips</Text>
              </View>
              <Text style={{ fontSize: 15, color: "#777" }}>3 days ago</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Pressable>
          <Text style={styles.loadButton}>LOAD MORE +</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  collectionContainer: {
    marginVertical: 10,
  },
  collectionTags: {
    fontSize: 20,
    marginRight: 30,
    backgroundColor: "#ebebeb",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
    overflow: "hidden",
  },
  mainBlogPostContainer: {
    gap: 20,
    marginTop: 30,
  },
  blogPostFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  blogTagsContainer: {
    flexDirection: "row",
    gap: 20,
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
  blogPost: {
    position: "relative",
  },
  blogPostPictureText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: 200,
  },
  linearGradient: {
    backgroundColor: "#20202055",
    height: "100%",
  },
  bookmarkIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  loadButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#a7a7a7",
    fontSize: 20,
    letterSpacing: 2,
  },
});
