import React, { Component } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";

const formatNumber = (number) => `0${number}`.slice(-2);
// getitng the reamaining time
const getRemaining = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) };
};
// creating the arrays for pickers
const createArray = (length) => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }
  return arr;
};

const timerMinutes = createArray(61);
const timerSeconds = createArray(60);

export default class Fortime extends Component {
  // state for the timer
  state = {
    remainingSeconds: 0,
    isRunning: false,
    selectedMinutes: "0",
    selectedSeconds: "0",
  };

  interval = null;

  componentDidUpdate = (prevProp, prevState) => {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this.stop();
    }
  };

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  // Starting the timer
  start = () => {
    if (
      this.state.selectedMinutes === "0" &&
      this.state.selectedSeconds === "0"
    ) {
      Alert.alert("Do a longer workout! ;)");
      return;
    }

    // calculate seconds
    const totalTime =
      parseInt(this.state.selectedMinutes, 10) * 60 +
      parseInt(this.state.selectedSeconds, 10);

    this.setState({ remainingSeconds: 0, isRunning: true }, () => {
      this.interval = setInterval(() => {
        this.setState((state) => ({
          remainingSeconds: state.remainingSeconds + 1,
        }));

        if (this.state.remainingSeconds >= totalTime) {
          clearInterval(this.interval);
          this.setState({ isRunning: false });
          this.setState({ remainingSeconds: 0 });
          Alert.alert("Workout Done! Great job!");
        }
      }, 1000);
    });
  };
  // stopping the timer
  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      remainingSeconds: 0,
      isRunning: false,
    });
  };
  // rendering the pickers
  renderPickers = () => (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedMinutes}
        onValueChange={(itemValue) => {
          this.setState({ selectedMinutes: itemValue });
        }}
        mode="dropDown"
      >
        {timerMinutes.map((value) => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>minutes</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedSeconds}
        onValueChange={(itemValue) => {
          this.setState({ selectedSeconds: itemValue });
        }}
        mode="dropDown"
      >
        {timerSeconds.map((value) => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>seconds</Text>
    </View>
  );
  // switch to what to render
  render() {
    const { minutes, seconds } = getRemaining(this.state.remainingSeconds);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.isRunning ? (
          <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        ) : (
          this.renderPickers()
        )}
        {this.state.isRunning ? (
          <TouchableOpacity
            onPress={this.stop}
            style={[styles.button, styles.buttonStop]}
          >
            <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.start} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 10,
    borderColor: "#89aaff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonStop: {
    borderColor: "#ff0000",
  },
  buttonText: {
    fontSize: 45,
    color: "#89aaff",
  },
  buttonTextStop: {
    color: "#ff851b",
  },
  timerText: {
    color: "#000000",
    fontSize: 90,
  },
  picker: {
    flex: 1,
    maxWidth: 150,
    color: "#000000",
    backgroundColor: "#fff",
  },
  pickerItem: {
    color: "#000000",
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
