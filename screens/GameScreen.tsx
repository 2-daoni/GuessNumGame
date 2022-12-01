import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumContainer from "../components/commons/NumContainert";
import PrimaryButton from "../components/commons/PrimaryButton";
import Title from "../components/commons/Title";
import IntroductionText from "../components/IntroductionText";

type RandomType = {
  min: number;
  max: number;
  exclude: number;
};

type Props = {
  userNum: number;
  handleGameOver: (gameOver: boolean) => void;
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

const GameScreen = ({ userNum, handleGameOver }: Props) => {
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
        Alert.alert("거짓말", "올바른 정보를 알려주세요!", [
          { text: "오케", style: "cancel" },
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

  useEffect(() => {
    if (currentGuess === userNum) {
      handleGameOver(true);
    }
  }, [currentGuess, handleGameOver, userNum]);

  return (
    <View style={styles.container}>
      <Title title="Guess Number" />
      <NumContainer>{currentGuess}</NumContainer>
      <View>
        <IntroductionText text="Up? Down?" />
        <View style={styles.btnContainer}>
          <PrimaryButton
            style={{ ...styles.btn }}
            onPress={() => {
              handleNextGuess("lower");
            }}
          >
            <Ionicons name="md-remove" size={24} />
          </PrimaryButton>
          <PrimaryButton
            style={{ ...styles.btn }}
            onPress={() => {
              handleNextGuess("greater");
            }}
          >
            <Ionicons name="add" size={24} />
          </PrimaryButton>
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
  btnContainer: {
    flexDirection: "row",
  },
  btn: {
    width: 150,
    height: 40,
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 2,
  },
});
