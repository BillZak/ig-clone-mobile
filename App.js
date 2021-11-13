import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <IconFontAwesome
          style={{
            fontSize: 25,
            color: "black",
            flex: 1,
            marginLeft: 20,
          }}
          name="reorder"
        />
        <Text
          style={{
            flex: 5,
            fontSize: 20,
            textAlign: "right",
            marginRight: 20,
          }}
        >
          Edit Profile
        </Text>
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
            source={require("./assets/icon.png")}
          />
        </View>
        <View style={{ flex: 3, paddingLeft: 20, paddingTop: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>user_name</Text>
          <Text style={{ fontWeight: "bold" }}>Your Name</Text>
          <Text>About You</Text>
        </View>
      </View>

      <View style={styles.face3}>
        <View style={styles.follows}>
          <Text style={styles.follownums}>4,300</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.follows}>
          <Text style={styles.follownums}>300</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.follows}>
          <Text style={styles.follownums}>40</Text>
          <Text>Advicers</Text>
        </View>
      </View>

      <View style={styles.face4}>
        <View style={[styles.posts, styles.activepost]}>
          <Text style={styles.posttexts}>Posts</Text>
        </View>
        <View style={styles.posts}>
          <Text style={styles.posttexts}>Media</Text>
        </View>
        <View style={styles.posts}>
          <Text style={styles.posttexts}>Likes</Text>
        </View>
        <View style={styles.posts}>
          <Text style={styles.posttexts}>Tagged</Text>
        </View>
      </View>

      <View style={styles.face5}>
        <IconMaterialIcons style={{ fontSize: 30 }} name="add" />
        <Text>Upload something for the first time</Text>
      </View>

      <View style={styles.face6}>
        <IconAntDesign style={styles.bottomicons} name="home" />
        <IconAntDesign style={styles.bottomicons} name="search1" />
        <IconAntDesign style={styles.bottomicons} name="videocamera" />
        <IconAntDesign style={styles.bottomicons} name="notification" />
        <IconFontAwesome
          style={[styles.bottomicons, styles.activeicon]}
          name="user-circle-o"
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  face1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderBottomWidth: 0.3,
    borderBottomColor: "silver",
  },
  face2: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
  },
  face3: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
  },
  face4: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
  },
  face5: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F8F7",
    width: "100%",
  },
  face6: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "silver",
  },
  follows: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  follownums: {
    fontSize: 20,
    fontWeight: "bold",
  },
  posts: {
    flex: 1,
    justifyContent: "center",
  },
  activepost: {
    borderBottomWidth: 4,
    borderBottomRightRadius: 40,
  },
  posttexts: {
    fontSize: 15,
    fontWeight: "bold",
  },
  bottomicons: {
    flex: 1,
    fontSize: 25,
    textAlign: "center",
    alignSelf: "center",
  },
  activeicon: {
    color: "grey",
  },
});
