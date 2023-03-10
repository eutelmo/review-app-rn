import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Review({ route,navigation }) {

  const { title,rating,body,key } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{JSON.stringify(title)}</Text>
      <Text>{JSON.stringify(body)}</Text>
      <Text>{JSON.stringify(rating)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
