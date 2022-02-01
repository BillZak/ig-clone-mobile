import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import AccountTabs from "../../../Component/Navigators/HomePageTabs";
import { Ionicons, EvilIcons, Feather } from "@expo/vector-icons";

export default function ReviewProfile({ route, navigation }) {
  const item = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="black"
        />
        <EvilIcons name="bell" size={30} color="black" />
        <Feather name="more-horizontal" size={24} color="black" />
      </View>

      <View style={styles.face2}>
        <View style={{ flex: 2 }}>
          <Image
            style={{
              height: 100,
              width: 100,
              marginLeft: 20,
              marginTop: 6,
              borderRadius: 100,
            }}
            source={require("../../../../assets/p.png")}
          />
        </View>
        <View style={{ flex: 3, paddingLeft: 20, paddingTop: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {item.item.username}
          </Text>
          <Text style={{ fontWeight: "bold" }}>{item.item.name}</Text>
          <Text>{item.item.about}</Text>
        </View>
      </View>

      <View style={styles.face3}>
        <View style={styles.follows}>
          <Text style={styles.follownums}>{item.item.followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.follows}>
          <Text style={styles.follownums}>{item.item.following}</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.follows}>
          <Text style={styles.follownums}>{item.item.advicers}</Text>
          <Text>Advicers</Text>
        </View>
      </View>
      <AccountTabs />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  face1: {
    flex: 0.13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "silver",
  },
  face2: {
    flex: 0.23,
    flexDirection: "row",
    width: "100%",
  },
  face3: {
    flex: 0.18,
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
  },
  tabs: {
    flex: 6,
  },
  // face4: {
  //   flex: 1,
  //   flexDirection: "row",
  //   paddingHorizontal: 20,
  //   width: "100%",
  //   borderBottomWidth: 0.3,
  //   borderBottomColor: "grey",
  // },
  // face5: {
  //   flex: 7,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#F7F8F7",
  //   width: "100%",
  // },
  follows: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  follownums: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
