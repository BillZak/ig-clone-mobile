//import liraries
import React, { useState } from "react";
import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "user_name",
    message: "Liked your post",
    img: require("../../../../../assets/n.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "user_name",
    message: "Follows you now",
    img: require("../../../../../assets/hj.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "user_name",
    message: "Commented 'Thank You' on your post",
    img: require("../../../../../assets/n.png"),
  },
  {
    id: "bd7acbea-c1b1-462-aed5-3ad53abb28ba",
    title: "user_name",
    message: "Liked your post",
    img: require("../../../../../assets/n.png"),
  },
  {
    id: "3ac6afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "user_name",
    message: "Follows you now",
    img: require("../../../../../assets/hj.jpeg"),
  },
  {
    id: "58694a0f-3da1-471-b96-145571e29d72",
    title: "user_name",
    message: "Commented 'Thank You' on your post",
    img: require("../../../../../assets/n.png"),
  },
  {
    id: "bd7acbea-c1b1-462-aed5-3d53abb28ba",
    title: "user_name",
    message: "Liked your post",
    img: require("../../../../../assets/n.png"),
  },
  {
    id: "3ac6afc-c605-48d3-a4f8-fbd91aa97f3",
    title: "user_name",
    message: "Follows you now",
    img: require("../../../../../assets/hj.jpeg"),
  },
  {
    id: "58694a0f-3da1-471-b96-14571e29d72",
    title: "user_name",
    message: "Commented 'Thank You' on your post",
    img: require("../../../../../assets/n.png"),
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

// create a component
const Activity = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
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

//make this component available to the app
export default Activity;
