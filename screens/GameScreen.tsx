import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import NumContainer from "../components/NumContainert";
import Title from "../components/Title";

type RandomType = {
  min: number;
  max: number;
  exclude: number;
};

type Props = {
  userNum: number;
};

const generateNum: any = ({ min, max, exclude }: RandomType) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateNum(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNum }: Props) => {
  const initialGuess = generateNum({
    min: minBoundary,
    max: maxBoundary,
    exclude: userNum,
  });
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  const handleNextGuess = (direction: "lower" | "greater") => {
    if (typeof userNum !== "undefined") {
      if (
        (direction === "lower" && currentGuess < userNum) ||
        (direction === "greater" && currentGuess > userNum)
      ) {
        Alert.alert("정답", "정답입니다!!", [
          { text: "쏘리", style: "cancel" },
        ]);
        return;
      }
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = generateNum({
      min: minBoundary,
      max: maxBoundary,
      exclude: currentGuess,
    });
    setCurrentGuess(newGuess);
    return;
  };

  return (
    <View style={styles.container}>
      <Title title="Guess Number" />
      <NumContainer>{currentGuess}</NumContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <Button
            onPress={() => {
              handleNextGuess("lower");
            }}
          >
            -
          </Button>
          <Button
            onPress={() => {
              handleNextGuess("greater");
            }}
          >
            +
          </Button>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 30,
  },
});
