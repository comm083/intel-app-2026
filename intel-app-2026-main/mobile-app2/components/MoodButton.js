import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";

const MoodButton = ({ mood, onPress, selectedMood }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={mood.id}
      style={[
        styles.button,
        selectedMood === mood.id ? styles.selected : null,
        { backgroundColor: mood.color },
      ]}
    >
      <FontAwesome6 name="face-smile-beam" size={24} color="black" />
      <Text style={styles.buttonText}>{mood.label}</Text>
    </TouchableOpacity>
  );
};

export default MoodButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: "80%",
    height: 70,
    justifyContent: "start",
    paddingLeft: 120,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    flexDirection: "row",
  },
  buttonText: { fontSize: 20 },
  selected: { borderWidth: 3 },
});
