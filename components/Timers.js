import { View, Text, Button, StyleSheet } from "react-native";

export default function TimersScreen() {
  return (
    <View style={styles.container}>
      <Text>Timers!</Text>
      <Button title="AMRAP" />
      <Button title="EMOM" />
      <Button title="FOR TIME" />
      <Button title="TABATA" />
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
