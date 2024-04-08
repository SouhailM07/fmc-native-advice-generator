import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { mycontainerStyles } from "./mycontainerStyles.ts";
// components
import MyBox from "../MyBox/MyBox.tsx";
//
import tw from "../../lib/tailwind.js";

export default function MyContainer() {
  return (
    <>
      <View style={tw`${mycontainerStyles.container}`}>
        <MyBox />
      </View>
      <StatusBar style="light" />
    </>
  );
}
