import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/about";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
   
    >
      <Stack.Screen name="AboutScreen" component={About}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
