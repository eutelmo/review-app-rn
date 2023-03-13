import { useState, useEffect } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";

import HomeStack from "./routes/homeStack";
import AboutStack from "./routes/aboutStack";

import Header from "./shared/header";
import { globalStyles } from "./styles/global";

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

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          // drawerContent={(navigation) => <Header navigation={navigation} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#aaa",
              width: 190,
            },
            drawerActiveBackgroundColor: "#fff",
            drawerActiveTintColor: "red",
            drawerInactiveTintColor: "#333",
            lazy: true,
            headerShown: true,
            drawerType: 'front',
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);

              return (
                <Header
                  title={title}
                  navigation={navigation}
                />
              );
            },
          }}
        >
          <Drawer.Screen name="GameZone" component={HomeStack} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
