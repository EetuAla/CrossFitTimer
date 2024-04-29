import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TimersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
        Choose your workout timer!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FFA500" }]}
          onPress={() => navigation.navigate("Amrap")}
        >
          <Text style={styles.buttonText}>AMRAP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#800080" }]}
          onPress={() => navigation.navigate("Emom")}
        >
          <Text style={styles.buttonText}>EMOM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#007bff" }]}
          onPress={() => navigation.navigate("Fortime")}
        >
          <Text style={styles.buttonText}>FOR TIME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#90EE90" }]}
          onPress={() => navigation.navigate("Tabata")}
        >
          <Text style={styles.buttonText}>TABATA</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flexDirection: "column",
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
