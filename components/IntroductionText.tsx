import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  text: string;
};

const IntroductionText = ({ text }: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default IntroductionText;

const styles = StyleSheet.create({
  text: {
    color: Colors.title,
    textAlign: "center",
  },
});
