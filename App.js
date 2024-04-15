import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TimersScreen from "./components/Timers";
import WorkoutScreen from "./components/Workouts";
import Amrap from "./components/DifferentTimers/Amrap";
import Emom from "./components/DifferentTimers/Emom";
import Fortime from "./components/DifferentTimers/Fortime";
import Tabata from "./components/DifferentTimers/Tabata";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Amrap" component={Amrap} />
        <Stack.Screen name="Emom" component={Emom} />
        <Stack.Screen name="Fortime" component={Fortime} />
        <Stack.Screen name="Tabata" component={Tabata} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Timers" component={TimersScreen} />
        <Tab.Screen name="Workouts" component={WorkoutScreen} />
      </Tab.Navigator>
    );
  }
}
