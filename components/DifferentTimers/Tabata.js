import { View, Text, Button, StyleSheet } from "react-native";

export default function Tabata() {
  return (
    <View style={styles.container}>
      <Text>TABATA TIMER!</Text>
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
