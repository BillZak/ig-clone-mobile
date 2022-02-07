//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
const EditProfilePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-outline"
          size={30}
          color="black"
        />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Edit Profile</Text>
        <Text style={{ fontSize: 18, color: "blue" }}>Done</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
          }}
          source={require("../../../../../assets/p.png")}
        />
        <Text style={{ fontWeight: "bold", marginTop: 10 }}>
          Change Profile Picture
        </Text>
      </View>
      <View style={styles.editInputs}>
        <View style={styles.editInput}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput style={styles.input} placeholder="name" />
        </View>
        <View style={styles.editInput}>
          <Text style={styles.inputTitle}>Userame</Text>
          <TextInput style={styles.input} placeholder="userame" />
        </View>
        <View style={styles.editInput}>
          <Text style={styles.inputTitle}>Bio</Text>
          <TextInput style={styles.input} placeholder="About you" />
        </View>
        <View style={styles.editInput}>
          <Text style={styles.inputTitle}>Website</Text>
          <TextInput style={styles.input} placeholder="Paste Url" />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  imageView: {
    alignItems: "center",
    paddingTop: 20,
  },
  editInputs: {
    padding: 20,
  },
  editInput: {
    paddingVertical: 15,
  },
  inputTitle: {
    fontSize: 18,
  },
  input: {
    paddingVertical: 5,
    fontSize: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "silver",
  },
});

//make this component available to the app
export default EditProfilePage;
