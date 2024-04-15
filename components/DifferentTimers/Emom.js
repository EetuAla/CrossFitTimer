import { View, Text, Button, StyleSheet } from "react-native";

export default function Emom() {
  return (
    <View style={styles.container}>
      <Text>EMOM TIMER!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
