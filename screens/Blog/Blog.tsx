import React from "react";
import { FlatList } from "react-native";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "../../components/footer";
import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
  BlogPost: { postId: string };
  // Add other screens as needed
};

type BlogScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "BlogPost"
>;

export default function Blog({
  navigation,
}: {
  navigation: BlogScreenNavigationProp;
}) {
  const data = [{ key: "header" }, { key: "MainContent" }, { key: "footer" }];
  return (
    <FlatList
      data={data}
      style={{ padding: 20 }}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        switch (item.key) {
          case "header":
            return <Header />;
          case "MainContent":
            return <MainContent />;
          case "footer":
            return <Footer navigation={navigation} />;
          default:
            break;
        }
        return null;
      }}
    />
  );
}
