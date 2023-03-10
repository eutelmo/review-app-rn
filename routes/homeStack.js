import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Review from "../screens/reviews";

const Stack = createStackNavigator();

export default  function HomeStack() {
  return (
 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reviews" component={Review} />
      </Stack.Navigator>
   
  );
}

