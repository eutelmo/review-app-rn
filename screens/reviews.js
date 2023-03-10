import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function Review({ route, navigation }) {
  const { title, rating, body, key } = route.params;

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Card>
          <Text style={styles.Title}>{JSON.stringify(title)}</Text>
          <Text>{JSON.stringify(body)}</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingTxt}>GameZone Rating:</Text>
            <Image style={styles.ratingImage} source={images.ratings[rating]} />
          </View>
        </Card>

        <Button
          onPress={() => navigation.navigate("Home")}
          title="Back to Home"
          color="red"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },

  rating: {
    marginTop: 12,
  },
  ratingTxt: {
    fontWeight: "bold",
  },
  ratingImage: {
    marginTop: 5,
  },
});
