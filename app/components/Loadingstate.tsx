// src/components/LoadingState.tsx

import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LoadingState: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/media/klarferdigstopplogo-loader.png")} // replace with your local path to the logo
        resizeMode="contain"
        style={styles.logo}
        alt="logo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "auto",
  },
  logo: {
    width: 150, // Maximum width of the logo
    height: 150, // Maximum height of the logo
    maxWidth: 150, // Ensures the logo does not exceed the maximum width
    maxHeight: 150, // Ensures the logo does not exceed the maximum height
  },
});

export default LoadingState;

/*
 <LoadingState />
*/
