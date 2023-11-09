import { StackNavigationProp } from "@react-navigation/stack";

export type StackParamList = {
  BlogPost: { postId: string };
};
export type NavigationProps = StackNavigationProp<StackParamList>;
