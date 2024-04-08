import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TimersScreen from "./components/Timers";
import WorkoutScreen from "./components/Workouts";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Timers" component={TimersScreen} />
        <Tab.Screen name="Workouts" component={WorkoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
