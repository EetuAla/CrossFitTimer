import { View, Text, Button, StyleSheet } from "react-native";

export default function Amrap() {
  return (
    <View style={styles.container}>
      <Text>AMRAP TIMER!</Text>
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
