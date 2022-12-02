import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/commons/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/commons/Title";
import IntroductionText from "../components/IntroductionText";

type Props = {
  handleSelectNum: (num: number) => void;
};

const StartScreen = ({ handleSelectNum }: Props) => {
  const [currentNum, setCurrentNum] = useState<string>();

  const handleNumber = (value: string) => {
    setCurrentNum(value);
  };

  const handleConfirm = () => {
    if (typeof currentNum !== "undefined") {
      const number = parseInt(currentNum);
      if (isNaN(number) || number <= 0 || number > 99) {
        Alert.alert(
          "숫자를 다시 입력해주세요!",
          "1과 99사이의 숫자를 입력해주세요!",
          [
            {
              text: "넹!",
              style: "destructive",
              onPress: () => {
                setCurrentNum("");
              },
            },
          ]
        );
        return;
      }
      handleSelectNum(number);
    }
  };

  const handleReset = () => {
    setCurrentNum("");
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.container}>
          <Title title="? Guess My Number ?" />
          <View style={styles.inputContainer}>
            <IntroductionText text="숫자를 입력해주세요" />
            <TextInput
              style={styles.input}
              // maxLength={2}
              keyboardType="number-pad"
              value={currentNum}
              onChangeText={handleNumber}
            />
            <View style={styles.btnContainer}>
              <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
              <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    padding: 50,
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a6b5cd",
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  input: {
    textAlign: "center",
    width: 60,
    height: 50,
    fontSize: 30,
    color: Colors.inputColor,
    borderBottomColor: Colors.inputColor,
    borderBottomWidth: 1,
    marginVertical: 8,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
  },
});
