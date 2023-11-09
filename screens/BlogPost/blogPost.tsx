import React from "react";
import { Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../types/types";

type BlogPostScreenRouteProp = RouteProp<StackParamList, "BlogPost">;

export interface BlogPostProps {
  route: BlogPostScreenRouteProp;
}

const BlogPost: React.FC<BlogPostProps> = ({ route }) => {
  const postId = route.params?.postId;
  return <Text>{postId}</Text>;
};

export default BlogPost;
