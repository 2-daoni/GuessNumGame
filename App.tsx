import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import GameScreen from "./screens/GameScreen";
import OverScreen from "./screens/OverScreen";
import StartScreen from "./screens/StartScreen";

type OverTypes = {
  gameOver: boolean;
  round: number;
};

export default function App() {
  const [userNum, setUserNum] = useState<any>(0);
  const [over, setOver] = useState<boolean>(false);
  const [rounds, setRounds] = useState<any>();

  const handleSelectNum = (num: number) => {
    setUserNum(num);
  };

  const handleGameOver = ({ gameOver, round }: OverTypes) => {
    setOver(gameOver);
    setRounds(round);
  };

  const restartGame = () => {
    setUserNum(null);
    setOver(false);
    setRounds(0);
  };

  let screen = <StartScreen handleSelectNum={handleSelectNum} />;

  if (userNum) {
    screen = <GameScreen userNum={userNum} handleGameOver={handleGameOver} />;
  }

  if (over) {
    screen = (
      <OverScreen
        roundsNum={rounds}
        userNum={userNum}
        handleStartGame={() => {
          restartGame();
        }}
      />
    );
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
