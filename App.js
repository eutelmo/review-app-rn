import { useState, useEffect, useCallback } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./routes/homeStack";
import AboutStack from "./routes/aboutStack";

import Home from "./screens/home";
import About from "./screens/about";
import Review from "./screens/reviews";

const Drawer = createDrawerNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
          "nunito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  //  return <Navigator />;

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
