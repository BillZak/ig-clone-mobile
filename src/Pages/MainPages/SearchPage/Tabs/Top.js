import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const Top = ({ route, navigation }) => {
  const DATA = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <View style={styles.idview}>
                <Image style={styles.profileimg} source={item.img} />
                <View style={styles.userid}>
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
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
                <Text
                  onPress={() =>
                    navigation.navigate("ReviewHome", { item: item })
                  }
                  style={{ fontSize: 15 }}
                >
                  {item.message}
                </Text>
              </View>
              <View style={styles.interactview}>
                <IconAntDesign style={styles.interacticons} name="hearto" />
                <IconFontAwesome
                  style={styles.interacticons}
                  name="comment-o"
                />
                <IconAntDesign style={styles.interacticons} name="retweet" />
                <IconAntDesign style={styles.interacticons} name="sharealt" />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Top;
