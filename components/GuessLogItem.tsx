import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  roundNum: number;
  guess: number;
};

const GuessLogItem = ({ roundNum, guess }: Props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>{roundNum}</Text>
      <Text style={styles.itemText}>맞춰볼게요: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.inputColor,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.inputColor,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "#111",
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
  },
  itemText: {
    color: "white",
  },
});
