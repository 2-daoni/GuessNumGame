import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import GameScreen from "./screens/GameScreen";
import OverScreen from "./screens/OverScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [userNum, setUserNum] = useState<number>();
  const [over, setOver] = useState<boolean>(false);

  const handleSelectNum = (num: number) => {
    setUserNum(num);
  };

  const handleGameOver = (gameOver: boolean) => {
    setOver(gameOver);
  };

  let screen = <StartScreen handleSelectNum={handleSelectNum} />;

  if (userNum) {
    screen = <GameScreen userNum={userNum} handleGameOver={handleGameOver} />;
  }

  if (over) {
    screen = <OverScreen />;
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
