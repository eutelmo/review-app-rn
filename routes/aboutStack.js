import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About",
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyles: {
      backgroundColor: "#eee",
      height: 60,
    },
  },
});

export default AboutStack;
