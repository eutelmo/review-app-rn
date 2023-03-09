import { useState, useEffect, useCallback } from "react";

import Home from "./screens/home";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
//   });

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
        // await new Promise((resolve) => setTimeout(resolve, 2000));
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

  return <Home />;
}
