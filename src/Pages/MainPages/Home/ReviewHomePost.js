//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

// create a component
const ReviewHomePost = ({ route, navigation }) => {
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="black"
        />
        <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 30 }}>
          Post
        </Text>
      </View>
      <View style={styles.idview}>
        <Image style={styles.profileimg} source={item.item.img} />
        <View style={styles.userid}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {item.item.name}
          </Text>
          <Text style={{ fontSize: 15, color: "grey" }}>
            {item.item.title} . {item.item.time}
          </Text>
        </View>
        <MaterialIcons
          style={{
            color: "black",
            fontSize: 20,
          }}
          name="more-vert"
        />
      </View>
      <View style={styles.post}>
        <Text style={styles.postmessage}>{item.item.message}</Text>
        <Text style={{ fontSize: 15, color: "grey" }}>{item.item.date}</Text>
      </View>
      <View style={styles.interactview}>
        <IconAntDesign style={styles.interacticons} name="hearto" />
        <IconFontAwesome style={styles.interacticons} name="comment-o" />
        <IconAntDesign style={styles.interacticons} name="retweet" />
        <IconAntDesign style={styles.interacticons} name="sharealt" />
      </View>
      <View style={styles.interactions}>
        <TouchableOpacity>
          <Text style={styles.interactionsText}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.interactionsText}>Comments</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lastview}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  idview: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  post: {
    flex: 1.4,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },
  interactview: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },
  interacticons: {
    flex: 1,
    textAlign: "center",
    margin: 5,
    fontSize: 25,
  },
  interactions: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },
  interactionsText: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 10,
  },
  lastview: {
    flex: 3,
  },
  profileimg: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  userid: {
    flex: 1,
    marginLeft: 10,
  },
  postmessage: {
    fontSize: 24,
    marginVertical: 10,
  },
});

//make this component available to the app
export default ReviewHomePost;
