import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, ...props }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#aaa",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    color: 'red',
  },
  icon: {
    position: "absolute",
    left: 16,
    bottom: 20
  },
});
