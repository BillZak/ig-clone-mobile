import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <IconAntDesign
            style={{ fontSize: 18, top: 15, left: 20 }}
            name="search1"
          />
          <TextInput style={{}} placeholder="Search here" />
        </View>
      </View>
      <View style={styles.face2}></View>
      <View style={styles.face3}></View>
      <View style={styles.face4}></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  face1: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    width: "100%",
  },
  face2: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
  },
  face3: {
    flex: 9,
    backgroundColor: "red",
    width: "100%",
  },
  face4: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
  },
});
