import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import { NativeRouter, Route, Link, Router, Routes } from "react-router-native";
import Game from "./Game";
const image = {
  uri: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80",
};


const Home = () => (
  <NativeRouter>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.welcome}>welcome to the trivial game</Text>

        <Text style={styles.text}>
          You will be presented with 10 true or false questions.
        </Text>
        <View style={styles.play}>
          <Text style={styles.text}>can you score 100%?</Text>
        
         
           <Button
            title="Begin"
            color="#0f0"
          />
        </View>
      </ImageBackground>
      <Routes>
      <Route  path="/game" component={Game} />

      </Routes>

    
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    width: "100%",
  },
  play: {
    position: "absolute",
    top: "80%",
    width: "100%",
  },
  welcome: {
    color: "white",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    position: "absolute",
    top: 0,
    width: "100%",
  },
});

export default Home;
