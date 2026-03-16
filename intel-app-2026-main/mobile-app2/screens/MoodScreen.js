import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { moodData } from "../data/moodData";
import MoodButton from "../components/MoodButton";

const MoodScreen = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const moodItems = moodData.find((mood) => mood.id === selectedMood);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>오늘 기분이 어때요?</Text>
      </View>
      {/* 행복해요 버튼 ************************************************************/}
      {moodData.map(
        (mood) => (
          <MoodButton
            key={mood.id}
            mood={mood}
            selectedMood={selectedMood}
            onPress={() => {
              setSelectedMood(mood.id);
            }}
          />
        ),
        // <TouchableOpacity
        //   key={mood.id}
        //   onPress={() => {
        //     setSelectedMood(mood.id);
        //   }}
        //   style={[
        //     styles.button,
        //     moodItems.id === mood.id ? styles.selected : null,
        //     { backgroundColor: mood.color },
        //   ]}
        // >
        //   <FontAwesome6 name="face-smile-beam" size={24} color="black" />
        //   <Text style={styles.buttonText}>{mood.label}</Text>
        // </TouchableOpacity>
      )}
      {/* <TouchableOpacity
        onPress={() => {
          console.log("행복해요");
        }}
        style={[styles.button, styles.selected, { backgroundColor: "#d7f10b" }]}
      >
        <FontAwesome6 name="face-smile-beam" size={24} color="black" />
        <Text style={styles.buttonText}>행복해요</Text>
      </TouchableOpacity> */}
      {/* 보통이에요 버튼 ************************************************************/}
      {/* <TouchableOpacity
        onPress={() => {
          console.log("보통이에요");
        }}
        style={[styles.button, styles.selected, { backgroundColor: "#999c88" }]}
      >
        <FontAwesome6 name="face-meh" size={24} color="black" />
        <Text style={styles.buttonText}>보통이에요</Text>
      </TouchableOpacity> */}
      {/* 우울해요 버튼 ************************************************************/}
      {/* <TouchableOpacity
        onPress={() => {
          console.log("우울해요");
        }}
        style={[styles.button, styles.selected, { backgroundColor: "#80739b" }]}
      >
        <FontAwesome6 name="face-frown" size={24} color="black" />
        <Text style={styles.buttonText}>우울해요</Text>
      </TouchableOpacity> */}
      {/* 메세지 표시 버튼 ************************************************************/}

      <View style={styles.messageBox}>
        <Text style={styles.message}>{moodItems && moodItems.message}</Text>
        <Image source={moodItems && moodItems.image} style={styles.imageSize} />
      </View>
    </View>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: { backgroundColor: "gold", marginBottom: 30 },
  titleText: { fontSize: 30, fontWeight: " 600" },
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
  messageBox: {
    backgroundColor: "#fff",
    width: "80%",
    height: 150,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // 그림자효과 (아이폰)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // 그림자효과 (안드로이드)
    elevation: 4,
  },
  selected: { borderWidth: 3 },
  message: { fontSize: 24 },
  imageSize: { width: 100, height: 100 },
});
