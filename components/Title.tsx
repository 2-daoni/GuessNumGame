import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.title,
    textAlign: "center",
    borderWidth: 4,
    bordercolor: Colors.title,
    padding: 15,
  },
});
