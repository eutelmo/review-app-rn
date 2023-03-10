import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import Home from "../screens/home";
import Review from "../screens/reviews";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="GameZone">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reviews"
        component={Review}
        options={{
          headerShown: false 
        }}
      />
    </Stack.Navigator>
  );
}
