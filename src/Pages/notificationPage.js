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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "user_name",
    message: "Liked your post",
    img: require("../../assets/n.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "user_name",
    message: "Follows you now",
    img: require("../../assets/hj.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "user_name",
    message: "Commented 'Thank You' on your post",
    img: require("../../assets/n.png"),
  },
  {
    id: "bd7acbea-c1b1-462-aed5-3ad53abb28ba",
    title: "user_name",
    message: "Liked your post",
    img: require("../../assets/n.png"),
  },
  {
    id: "3ac6afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "user_name",
    message: "Follows you now",
    img: require("../../assets/hj.jpeg"),
  },
  {
    id: "58694a0f-3da1-471-b96-145571e29d72",
    title: "user_name",
    message: "Commented 'Thank You' on your post",
    img: require("../../assets/n.png"),
  },
  {
    id: "bd7acbea-c1b1-462-aed5-3d53abb28ba",
    title: "user_name",
    message: "Liked your post",
    img: require("../../assets/n.png"),
  },
  {
    id: "3ac6afc-c605-48d3-a4f8-fbd91aa97f3",
    title: "user_name",
    message: "Follows you now",
    img: require("../../assets/hj.jpeg"),
  },
  {
    id: "58694a0f-3da1-471-b96-14571e29d72",
    title: "user_name",
    message: "Commented 'Thank You' on your post",
    img: require("../../assets/n.png"),
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={{ flex: 2 }}>
      <Image style={styles.profileimg} source={item.img} />
    </View>
    <View style={{ flex: 6 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.message}</Text>
    </View>
  </TouchableOpacity>
);

const Notification = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
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

      <View style={styles.face2}>
        <View style={[styles.activity, styles.activeactivitytext]}>
          <TouchableOpacity>
            <Text style={styles.activitytext}>All Activity</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activity}>
          <TouchableOpacity>
            <Text style={styles.activitytext}>Mentions</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.face3}>
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
    marginTop: 30,
  },
  face1: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  face2: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  face3: {
    flex: 10,
    backgroundColor: "#F7F8F7",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: "silver",
  },
  navbar: {
    flex: 1,
    justifyContent: "center",
  },
  activity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activitytext: {
    fontSize: 15,
    fontWeight: "bold",
  },
  activeactivitytext: {
    borderBottomWidth: 4,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  profileimg: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Notification;
