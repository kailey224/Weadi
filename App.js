import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.menuBar}>
        <Text style={styles.menuTitle}>오늘의 날씨는?</Text>
      </View>
      <View style={styles.weather}>
        <ImageBackground source={require("./assets/background.png")} style={styles.bgImage} imageStyle={{borderRadius: 15}}>
          <View style={styles.info}>
            <Text style={styles.date}>5.19 (금)</Text>
            <Text style={styles.location}>서울 종로구</Text>
            <Text style={styles.temp}>28°</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.comment}>
        <Text>Hi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  menuBar: {
    flex: 0.5,
    paddingTop: 46,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "center",
    alignItems: "start",
  },
  menuTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  weather: {
    flex: 4,
    paddingLeft: 24,
    paddingRight: 24,
  },
  bgImage: {
    width: '100%', 
    height: '100%',
  },
  info: {
    flex: 1,
    alignItems: "start",
    padding: 24,
  },
  date: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "400",
    color: "#171717"
  },
  location: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "500",
    color: "#171717"
  },
  temp: {
    fontSize: 60,
    fontWeight: "400",
    color: "#171717"
  },
  comment: {
    flex: 2,
  }
});