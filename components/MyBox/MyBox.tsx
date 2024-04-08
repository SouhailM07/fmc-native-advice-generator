import { Pressable, Text, View } from "react-native";
import { Svg, Path, G, Rect } from "react-native-svg";
// hooks
import { useState, useEffect } from "react";
// ? tools
import tw from "../../lib/tailwind.js";
import { myboxStyles } from "./myboxStyles.ts";
import { useFonts } from "expo-font";

/*==============================================================================================*/
// main component section
/*==============================================================================================*/
export default function MyBox() {
  // fonts
  const [fontsLoaded] = useFonts({
    manrope: require("../../fonts/manrope/static/Manrope-ExtraBold.ttf"),
  });
  // states
  let [advice, setAdvice]: any = useState("");
  let [loading, setLoading] = useState<boolean>(false);
  // handlers
  let getAdvice = async () => {
    setLoading(true);
    await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((res) => {
        setAdvice(res.slip);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };
  //
  useEffect(() => {
    getAdvice();
  }, []);
  if (!fontsLoaded) {
    return <Text>Loading Fonts</Text>;
  }
  return (
    <View style={tw`${myboxStyles.container}`}>
      <Text style={myboxStyles.header}>
        {loading ? "loading..." : `ADVICE #${advice.id}`}
      </Text>
      <Text style={myboxStyles.advice}>
        "{!loading ? advice.advice : "loading..."}"
      </Text>
      <Line />
      <Pressable onPress={getAdvice} style={myboxStyles.btn}>
        <Dice size={24} />
      </Pressable>
    </View>
  );
}

/*==============================================================================================*/
// small components section
/*==============================================================================================*/

let Line = () => (
  <Svg width="295" height="16">
    <G fill="none" fill-rule="evenodd">
      <Path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
      <G transform="translate(138)" fill="#CEE3E9">
        <Rect width="6" height="16" rx="3" />
        <Rect x="14" width="6" height="16" rx="3" />
      </G>
    </G>
  </Svg>
);

let Dice = ({ size }) => (
  <Svg width={size} height={size}>
    <Path
      d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      fill="#202733"
    />
  </Svg>
);
