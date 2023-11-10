import { StackNavigationProp } from "@react-navigation/stack";

export type StackParamList = {
  BlogPost: { postId: string };
};
export type StackParamListFooter = {
  About: { foo: string; onBar: () => void } | undefined;
  Blog: { foo: string; onBar: () => void } | undefined;
};

export type NavigationPropsFooter = StackNavigationProp<StackParamListFooter>;

export type NavigationProps = StackNavigationProp<StackParamList>;
