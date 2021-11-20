import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("./assets/n.png"),
    time: "6m",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("./assets/hj.jpeg"),
    time: "4h",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("./assets/n.png"),
    time: "12m",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28ba",
    title: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("./assets/n.png"),
    time: "6h",
  },
  {
    id: "3ac68afc-c605-48d3-a4f-fbd91aa97f63",
    title: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("./assets/hj.jpeg"),
    time: "4s",
  },
  {
    id: "58694af-3da1-471f-bd96-145571e29d72",
    title: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("./assets/n.png"),
    time: "12h",
  },
];

const Item = ({ item, onPress }) => (
  <View onPress={onPress} style={styles.item}>
    <View style={styles.idview}>
      <Image style={styles.profileimg} source={item.img} />
      <View style={styles.userid}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 12, color: "grey" }}>
          {item.title} . {item.time}
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
      <Text style={{ fontSize: 15 }}>{item.message}</Text>
    </View>

    <View style={styles.interactview}>
      <IconAntDesign style={styles.interacticons} name="hearto" />
      <IconFontAwesome style={styles.interacticons} name="comment-o" />
      <IconAntDesign style={styles.interacticons} name="retweet" />
      <IconAntDesign style={styles.interacticons} name="sharealt" />
    </View>
  </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <View style={styles.navbar}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Theragram</Text>
        </View>
        <View style={styles.navbar}>
          <IconMaterialIcons
            style={{
              fontSize: 25,
              textAlign: "right",
            }}
            name="add-box"
          />
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

      <View style={styles.face3}>
        <IconAntDesign
          style={[styles.bottomicons, styles.activeicon]}
          name="home"
        />
        <IconAntDesign style={styles.bottomicons} name="search1" />
        <IconAntDesign style={styles.bottomicons} name="videocamera" />
        <IconAntDesign style={styles.bottomicons} name="notification" />
        <IconFontAwesome style={styles.bottomicons} name="user-circle-o" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  face1: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  face2: {
    flex: 11,
  },
  face3: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "silver",
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
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
  },
  interacticons: {
    flex: 1,
    textAlign: "center",
    margin: 5,
    fontSize: 20,
  },
  navbar: {
    flex: 1,
    justifyContent: "center",
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

export default App;
