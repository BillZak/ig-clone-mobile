import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchPageTabs } from "../../../../Component/Navigators/TopTabNavigator";

const Love = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <View style={styles.navbar}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={30}
            color="black"
          />
          <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 20 }}>
            Love
          </Text>
        </View>
      </View>
      <SearchPageTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  face1: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Love;
