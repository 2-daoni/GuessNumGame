import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumContainer from "../components/commons/NumContainert";
import PrimaryButton from "../components/commons/PrimaryButton";
import Title from "../components/commons/Title";
import IntroductionText from "../components/IntroductionText";
import GuessLogItem from "../components/GuessLogItem";

type RandomType = {
  min: number;
  max: number;
  exclude: number;
};

type OverTypes = {
  gameOver: boolean;
  round: number;
};

type Props = {
  userNum: number;
  handleGameOver: ({ gameOver, round }: OverTypes) => void;
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
  const [rounds, setRounds] = useState<Array<any>>([initialGuess]);
  const roundsLength = rounds.length;
  const { width, height } = useWindowDimensions();

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
    setRounds((prevRounds) => [...prevRounds, newGuess]);
    return;
  };

  useEffect(() => {
    if (currentGuess === userNum) {
      handleGameOver({ gameOver: true, round: roundsLength });
    }
  }, [currentGuess, handleGameOver, userNum]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          keyExtractor={(item) => item}
          renderItem={(item) => (
            <GuessLogItem
              roundNum={roundsLength - item.index}
              guess={item.item}
            />
          )}
        />
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
    justifyContent: "center",
  },
  btn: {
    width: 150,
    height: 40,
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 2,
  },
  listContainer: {
    flex: 1,
    padding: 15,
  },
});
