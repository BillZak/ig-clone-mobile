import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAvoidingViewComponent } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Love",
    amount: "132k posts",
    username: "@user_name",
    name: "Yourname",
    message:
      "NB: Post must contain inspirational message and advice about Love",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "08:20 AM, 09 SEP 21",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Work",
    amount: "1.2m posts",
    username: "@user_name",
    name: "Yourname",
    message:
      "NB: Post must contain inspirational message and advice about work",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "15:20 PM, 26 JUL 21",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Believe",
    amount: "45k posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "07:50 PM, 17 AUG 21",
  },
  {
    id: "bdacbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Health",
    amount: "482k posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "10:20 AM, 10 DEC 21",
  },
  {
    id: "3ac8afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Motivation",
    amount: "567k posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "06:30 AM, 02 NOV 21",
  },
  {
    id: "5864a0f-3da1-471f-bd96-145571e29d72",
    title: "heartbreak",
    amount: "19k posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "12:25 AM, 31 JUN 21",
  },
  {
    id: "bd7acbea-c1b1-46c2-ad5-3ad53abb28ba",
    title: "Life",
    amount: "3.4m posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "04:20 PM, 24 APR 21",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91a97f63",
    title: "# Health",
    amount: "298k posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "05:20 PM, 11 MAR 21",
  },
  {
    id: "58694a0f3da1-471f-bd96-145571e29d72",
    title: "# Science",
    amount: "938k posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "03:45 PM, 14 Jan 22",
  },
  {
    id: "bdacbea-cb1-46c2-aed5-3ad53abb28ba",
    title: "# Technology",
    amount: "945k posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "09:45 PM, 20 Feb 21",
  },
  {
    id: "3ac8afc-c605-4d3-a4f8-fbd91aa97f63",
    title: "# Relationship",
    amount: "7m posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "10:20 AM, 19 DEC 21",
  },
  {
    id: "5864a0f-3da1-471f-d96-145571e29d72",
    title: "# God",
    amount: "32M posts",
    username: "@user_name",
    name: "Yourname",
    message: "NB: Post must contain inspirational message and advice about God",
    img: require("../../../../assets/n.png"),
    time: "6m",
    date: "11:30 AM, 10 DEC 21",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={{ flex: 4 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={{ color: "grey" }}>{item.amount}</Text>
    </View>
    <IconMaterialIcons
      style={{
        fontSize: 25,
        textAlign: "right",
        flex: 1,
        alignSelf: "center",
        color: "grey",
      }}
      name="more-vert"
    />
  </TouchableOpacity>
);

const SearchPage = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("ReviewSection", { item: item })}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#F7F8F7",
            borderRadius: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            paddingVertical: 5,
            paddingLeft: 20,
          }}
        >
          <IconAntDesign
            style={{ flex: 1, fontSize: 18, top: 2 }}
            name="search1"
          />
          <TextInput
            style={{ flex: 9, fontSize: 18 }}
            placeholder="Search here"
          />
        </View>
      </View>

      <View style={styles.face2}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Areas to relate to you
        </Text>
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
    paddingTop: 20,
  },
  face1: {
    flex: 1,
  },
  face2: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SearchPage;
