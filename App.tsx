import HomeScreen from "./screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "./screens/About";
import { StatusBar } from "expo-status-bar";
import Header from "./components/header";
import Blog from "./screens/Blog/Blog";
import BlogPost from "./screens/BlogPost/blogPost";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => <Header />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={SecondScreen} />
          <Stack.Screen name="Blog" component={Blog} />
          <Stack.Screen name="BlogPost" component={BlogPost} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}
