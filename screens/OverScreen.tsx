import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/commons/PrimaryButton";
import Title from "../components/commons/Title";

type Props = {
  roundsNum: number;
  userNum: number;
  handleStartGame: () => void;
};

const OverScreen = ({ roundsNum, userNum, handleStartGame }: Props) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 450) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title title="Game Over!" />
        <View style={{ ...styles.imageContainer, ...imageStyle }}>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          당신의 숫자 <Text style={styles.highlight}>{userNum}</Text>를{" "}
          <Text style={styles.highlight}>{roundsNum}</Text>번만에 맞췄네요!
        </Text>
        <PrimaryButton
          onPress={() => {
            handleStartGame();
          }}
          style={styles.btn}
        >
          게임 다시 하기
        </PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default OverScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  imageContainer: {
    marginTop: 50,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  highlight: {
    fontWeight: "bold",
    color: "#c66262",
  },
  btn: {
    width: 200,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    shadowColor: "#111",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
