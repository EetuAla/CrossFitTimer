import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQ_LHRsTguTe_Pjru4PwxDrVxbB5gjuqo",
  authDomain: "crossfittimer-935e5.firebaseapp.com",
  databaseURL:
    "https://crossfittimer-935e5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crossfittimer-935e5",
  storageBucket: "crossfittimer-935e5.appspot.com",
  messagingSenderId: "725226850324",
  appId: "1:725226850324:web:f95024b9e8b8481217bf01",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function WorkoutScreen() {
  const [workout, setWorkout] = useState({
    title: "",
    description: "",
  });
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    onValue(ref(database, "/workouts"), (snapshot) => {
      const data = snapshot.val();
      setWorkouts(Object.values(data));
    });
  }, []);

  const handleSave = () => {
    push(ref(database, "/workouts"), workout);
    setWorkout({ title: "", description: "" });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={workout.title}
        onChangeText={(value) => setWorkout({ ...workout, title: value })}
        placeholder="Name"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={workout.description}
        onChangeText={(value) => setWorkout({ ...workout, description: value })}
        placeholder="Description"
        multiline={true}
      />
      <Button title="Add Workout" onPress={handleSave} />
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={styles.workoutContainer}>
            <Text style={styles.flatlistTitle}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  flatlistTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
  workoutContainer: {
    alignItems: "center",
  },
  description: {
    marginRight: 150,
  },
});
