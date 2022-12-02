import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.title,
    padding: deviceWidth < 380 ? 12 : 24,
    marginVertical: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    color: Colors.title,
    fontSize: deviceWidth < 380 ? 24 : 30,
    fontWeight: "bold",
  },
});
