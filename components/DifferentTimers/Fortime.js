import { View, Text, Button, StyleSheet } from "react-native";

export default function Fortime() {
  return (
    <View style={styles.container}>
      <Text>FOR TIME TIMER!</Text>
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