import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.face1}>
          <Text>Face 1</Text>
      </View>
      <View style={styles.face2}>
          <Text>Face 2</Text>
      </View>
      <View style={styles.face3}>
          <Text>Face 3</Text>
      </View>
      <View style={styles.face4}>
          <Text>Face 4</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  face1: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue',
  },
  face2: {
    flex: 3,
    width: '100%',
    backgroundColor: 'azure',
  },
  face3: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
  face4: {
   flex: 1,
   width: '100%',
   backgroundColor: 'green',
  }
});
