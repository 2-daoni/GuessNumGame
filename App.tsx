import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import GameScreen from "./screens/GameScreen";
import GameScreen2 from "./screens/GameScreen2";
import StartScreen from "./screens/StartScreen";
import StartScreen2 from "./screens/StartScreen2";

export default function App() {
  const [userNum, setUserNum] = useState<number>();

  const handleSelectNum = (num: number) => {
    setUserNum(num);
  };

  let screen = <StartScreen handleSelectNum={handleSelectNum} />;

  if (userNum) {
    screen = <GameScreen userNum={userNum} />;
  }

  return (
    <View style={styles.rootScreen}>
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
