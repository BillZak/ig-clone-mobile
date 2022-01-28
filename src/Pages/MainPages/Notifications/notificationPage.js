import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import TopTabNavigator from "../../../Component/Navigators/TopTabNavigator";

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Notifications
          </Text>
        </View>
        <View style={styles.navbar}>
          <IconAntDesign
            style={{ fontSize: 25, textAlign: "right" }}
            name="setting"
          />
        </View>
      </View>
      <TopTabNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  navbar: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Notification;
