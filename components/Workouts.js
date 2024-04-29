import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

// Your web app's Firebase configuration
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

// Initialize Firebase
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
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={workout.title}
        onChangeText={(value) => setWorkout({ ...workout, title: value })}
        placeholder="Name"
      />
      <TextInput
        value={workout.reps}
        onChangeText={(value) => setWorkout({ ...workout, description: value })}
        placeholder="Description"
      />
      <Button title="Add Workout" onPress={handleSave} />
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
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
});
