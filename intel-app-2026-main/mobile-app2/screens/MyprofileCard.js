import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { myData } from "../data/myData";

// 프로필 카드 앱버전

const MyprofileCard = () => {
  const [profileID, setProfileID] = useState(1);
  const myItems = myData.find((file) => file.id === profileID);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>교육생 프로필</Text>
      </View>
      {myData.map((item) => (
        <View key={item.id}>
          <Image source={item && item.image} style={styles.imageSize} />
          <Text style={styles.textSize}>이름 : {item.name}</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${item.phone}`);
            }}
          >
            <Text style={styles.textSize}>핸드폰 : {item.phone}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`mailto:${item.email}`);
            }}
          >
            <Text style={styles.textSize}>이메일 : {item.email}</Text>
          </TouchableOpacity>
          <Text style={styles.textSize}>좌우명 : {item.message}</Text>
        </View>
      ))}
    </View>
  );
};

export default MyprofileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4f6fa",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { backgroundColor: "gold", marginBottom: 30 },
  titleText: { fontSize: 40, fontWeight: "600" },
  imageSize: { width: 200, height: 200, alignSelf: "center", marginBottom: 30 },
  textSize: { fontSize: 22, fontWeight: "450" },
});
