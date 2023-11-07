import HomeScreen from "./screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "./screens/About";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./components/header";
import Blog from "./screens/Blog/Blog";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View>
          <Header />
        </View>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="About"
            component={SecondScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Blog"
            component={Blog}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}
