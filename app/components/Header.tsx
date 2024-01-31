import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>
          <Image
            source={require("../../assets/media/klarferdigstopplogo.png")}
            resizeMode="contain"
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={styles.navButtons}>
          <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Specific")}>
            <Text style={styles.buttonText}>Specific</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Setup")}>
            <Text style={styles.buttonText}>Setup</Text>
          </TouchableOpacity>
          {/* Add more buttons as needed */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    width: 130,
    height: 90,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    padding: 10,
    // Add other styling for the text as needed
  },
  outerContainer: {
    backgroundColor: "#ffffff",
    ...Platform.select({
      ios: {
        zIndex: -1,
      },
    }),
  },
  safeArea: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 150,
    // Remove width and height as percentages are not valid here
  },
  touchable: {
    // Add styles for the touchable if needed, like padding or margins
  },
});

export default Header;
