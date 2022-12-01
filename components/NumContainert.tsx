import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  children: any;
};

const NumContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
};

export default NumContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.title,
    padding: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    color: Colors.title,
    fontSize: 30,
    fontWeight: "bold",
  },
});
