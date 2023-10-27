import { StackNavigationProp } from "@react-navigation/stack";

type StackParamList = {
  Home: { foo: string; onBar: () => void } | undefined;
};
export type NavigationProps = StackNavigationProp<StackParamList>;
