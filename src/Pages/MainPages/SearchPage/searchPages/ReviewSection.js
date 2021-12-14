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

const ReviewSection = ({ route, navigation }) => {
  const item = route.params.item;
  console.log(item.username);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <View style={styles.navbar}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={25}
            color="black"
          />
          <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 20 }}>
            {item.title}
          </Text>
        </View>
      </View>
      <SearchPageTabs title={item.title} />
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

export default ReviewSection;
