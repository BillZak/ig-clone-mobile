import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    about: "About you",
    time: "6m",
    date: "10:20 AM, 10 DEC 21",
    followers: "100",
    following: "100",
    advicers: "40",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/hj.jpeg"),
    about: "About you",
    time: "4h",
    date: "11:40 AM, 14 JAN 21",
    followers: "150",
    following: "10",
    advicers: "20",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    about: "About you",
    time: "12m",
    date: "07:30 AM, 09 SEPT 21",
    followers: "800",
    following: "130",
    advicers: "30",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28ba",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    about: "About you",
    time: "6h",
    date: "12:00 PM, 12 MAR 21",
    followers: "320",
    following: "100",
    advicers: "70",
  },
  {
    id: "3ac68afc-c605-48d3-a4f-fbd91aa97f63",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/hj.jpeg"),
    about: "About you",
    time: "4s",
    date: "09:50 PM, 30 AUG 21",
    followers: "2000",
    following: "1200",
    advicers: "47",
  },
  {
    id: "58694af-3da1-471f-bd96-145571e29d72",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "12h",
    date: "03:29 AM, 24 FEB 21",
    followers: "3210",
    following: "170",
    advicers: "60",
    about: "About you",
  },
];

const Item = ({ item, onPress, GotoProfile }) => (
  <View style={styles.item}>
    <View style={styles.idview}>
      <Image style={styles.profileimg} source={item.img} />
      <View style={styles.userid}>
        <Text onPress={GotoProfile} style={{ fontWeight: "bold" }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 12, color: "grey" }}>
          {item.username} . {item.time}
        </Text>
      </View>
      <IconMaterialIcons
        style={{
          fontSize: 20,
          alignSelf: "center",
          position: "absolute",
          right: 0,
        }}
        name="more-vert"
      />
    </View>

    <View style={styles.postview}>
      <Text onPress={onPress} style={{ fontSize: 15 }}>
        {item.message}
      </Text>
    </View>

    <View style={styles.interactview}>
      <IconAntDesign style={styles.interacticons} name="hearto" />
      <IconFontAwesome style={styles.interacticons} name="comment-o" />
      <IconAntDesign style={styles.interacticons} name="retweet" />
      <IconAntDesign style={styles.interacticons} name="sharealt" />
    </View>
  </View>
);

const HomePage = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("ReviewHome", { item: item })}
        GotoProfile={() => navigation.navigate("ReviewProfile", { item: item })}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <View style={styles.navbar}>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
            Theragram
          </Text>
          <View style={styles.navicons}>
            <IconMaterialIcons
              style={{
                fontSize: 25,
                paddingRight: 25,
              }}
              name="add-box"
            />
            <AntDesign
              onPress={() => navigation.navigate("Messages")}
              name="message1"
              size={22}
              color="black"
            />
          </View>
        </View>
      </View>

      <View style={styles.face2}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  face1: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  face2: {
    flex: 11,
  },
  item: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "silver",
  },
  idview: {
    flex: 1,
    flexDirection: "row",
    position: "relative",
    paddingVertical: 5,
  },
  postview: {
    flex: 1,
    paddingVertical: 5,
  },
  interactview: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
  },
  interacticons: {
    margin: 5,
    fontSize: 20,
  },
  navbar: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  navicons: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileimg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userid: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomePage;
