import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/home";
import ReviewsDetails from "../screens/reviews";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
    },
  },
  ReviewsDetails: {
    screen: ReviewsDetails,
    navigationOptions: {
      title: "Reviews Details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyles: {
      backgroundColor: "#eee",
      height: 60,
    },
  },
});

export default HomeStack;
