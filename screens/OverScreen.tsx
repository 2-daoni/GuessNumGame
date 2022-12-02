import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/commons/PrimaryButton";
import Title from "../components/commons/Title";

type Props = {
  roundsNum: number;
  userNum: number;
  handleStartGame: () => void;
};

const OverScreen = ({ roundsNum, userNum, handleStartGame }: Props) => {
  return (
    <View style={styles.container}>
      <Title title="Game Over!" />
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
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
  );
};

export default OverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 50,
    width: deviceWidth < 380 ? 150 : 250,
    height: deviceWidth < 380 ? 150 : 250,
    borderRadius: deviceWidth < 380 ? 75 : 125,
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
  },
});
