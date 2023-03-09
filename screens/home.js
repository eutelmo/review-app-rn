import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "The Legend of Zelda: Breath of the Wild",
      rating: 5,
      body: "The Legend of Zelda: Breath of the Wild eschewed the semi-linear, borderline predictable path of the 3D Zelda games before it in favor of a bold, crazy new approach: let players do what they want, how they want, and in whatever order they decide. By marrying an open-ended approach to quest structure with the ability to freely explore a vast, beautiful, intriguing world with little specific regulation, the 3D Zelda game template was shattered about as fast as the average breakable weapon in Breath of the Wild. The result is a gorgeous, freeing open-world action/adventure experience that evokes the wonder and fear of exploring a bold new place with the empowering tangibility of becoming its hero.",
      key: "1",
    },
    {
      title: "Super Mario World",
      rating: 5,
      body: "Super Mario World is a relatively simple game to describe. It’s a Super Mario game, and we all know what that means: Mushrooms; perfect running and jumping action; and a giant world to explore, crammed with secrets. But what sets Super Mario World apart from other 2D Mario games is its irresistible complexity. Subsequent Super Mario games, like the New Super Mario Bros. series, simplified the overworld, trading Super Mario World’s cool hidden paths for linear tracks, largely abandoned the skies and treetops of Super Mario World’s vertical levels for ground-based obstacle courses, and did away with flying almost entirely (capes rule, helicopter hats drool!). Super Mario World is the crescendo to the slow build in technology and game design that started with Super Mario Bros. Let Super Mario World’s placement on this list be a challenge to future game developers. We dare you to make a better game: Puzzling, but not opaque; tough but not intimidating; beautiful, funny, joyful, and universally recognizable.",
      key: "2",
    },
    {
      title: "Portal 2",
      rating: 4,
      body: "Portal undoubtedly came out of nowhere and shattered the mold, but Portal 2 took that raw and incredible concept and managed to shape it into a more polished and impressive package. It cranked the dials up on just about everything that made the original so special. The mind-bending puzzles, the surprisingly dark story, and the ridiculous humor that balanced it out - each piece of that picture was refined and refreshed to build a sequel that actually surpassed the ambition of an already extremely ambitious game, making something both familiar and altogether new.",
      key: "3",
    },
    {
      title: "The Legend of Zelda: A Link to the Past",
      rating: 3,
      body: "From it’s unforgettable beginnings guiding a swordless Link through the rain, to the final showdown with Ganon and utilizing mastery of sword and bow to defeat evil, The Legend of Zelda: Link to the Past measured out a perfect pace of dungeons, exploration, and a gripping narrative that was almost unheard of at the time. It’s open landscape was always inviting but never felt aimless – striking the perfect balance of freedom and purpose in your quest to save Princess Zelda. ",
      key: "4",
    },
    {
      title: "Super Metroid",
      rating: 5,
      body: "Super Metroid’s minimalistic environmental storytelling set a bar, way back in 1994, that I believe has still yet to be eclipsed. The planet Zebes is atmospheric, oppressive, and extremely lethal. At first glance, there doesn’t even appear to be any story. But then you start to look more closely. The parasite-riddled dead soldier outside of an early boss room. ",
      key: "5",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewsDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
