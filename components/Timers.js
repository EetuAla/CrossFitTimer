import { View, Text, Button, StyleSheet } from "react-native";

export default function TimersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Coose your workout timer!</Text>
      <Button title="AMRAP" onPress={() => navigation.navigate("Amrap")} />
      <Button title="EMOM" onPress={() => navigation.navigate("Emom")} />
      <Button title="FOR TIME" onPress={() => navigation.navigate("Fortime")} />
      <Button title="TABATA" onPress={() => navigation.navigate("Tabata")} />
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
