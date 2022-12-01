import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  children: any;
  onPress: any;
};

const Button = ({ children, onPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedBtn}
      onPress={onPress}
    >
      <View style={styles.btnContainer}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: 100,
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "#d5dde7",
    marginHorizontal: 5,
    marginTop: 10,
  },
  pressedBtn: {
    opacity: 0.75,
  },
});
