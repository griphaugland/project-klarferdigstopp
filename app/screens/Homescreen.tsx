import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { NavigationProp } from "@react-navigation/native";
import { globalStyles } from "../../style"; // adjust the path as needed
import { AddButton } from "../components/Button";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const goToSpecificAddiction = () => {
  // Navigation function remains the same
};

const addNewAddiction = () => {
  // Function to handle adding a new addiction
};

const Homescreen = ({ navigation }: RouterProps) => {
  const [addictions, setAddictions] = useState<string[]>([]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.introSection}>
        <Text style={[styles.introText, globalStyles.regularText]}>
          Er du klar til å gjøre en innsats for et
          <Text style={[styles.boldText, globalStyles.boldText]}>
            {" "}
            bedre liv
          </Text>
          ?
        </Text>
        <Text style={[styles.introText, globalStyles.regularText]}>
          Vi kan ikke hjelpe deg å holde deg borte fra avhengigheten din.
        </Text>
        <Text style={[styles.introText, globalStyles.regularText]}>
          Men vi kan hjelpe deg å holde styr på{" "}
          <Text style={[styles.boldText, globalStyles.boldText]}>
            hvor langt du har kommet.
          </Text>
        </Text>
      </View>
      <View style={styles.howItWorksSection}>
        <Text
          style={[
            styles.howItWorksText,
            styles.boldText,
            styles.bigText,
            { color: "#ffffff", paddingBottom: 2 },
          ]}
        >
          Sånn funker det
        </Text>
        <Text
          style={[
            styles.howItWorksText,
            globalStyles.regularText,
            { color: "#ffffff" },
          ]}
        >
          Trykk på plussen og velg eller skriv inn din avhengighet.
        </Text>
        <Text
          style={[
            styles.howItWorksText,
            styles.regularText,
            { color: "#ffffff" },
          ]}
        >
          Sjekk i appen eller legg til appens widget på hjemskjermen din for å
          se hvor langt du har kommet.
        </Text>
      </View>
      <Text
        style={[
          styles.howItWorksText,
          styles.boldText,
          styles.bigText,
          {
            color: "#094D69",
            padding: 20,
            alignSelf: "flex-start",
            paddingBottom: 20,
          },
        ]}
      >
        Oversikt ({addictions.length})
      </Text>
      <View style={styles.addictionList}>
        {/* Example button to add a new addiction */}
        <AddButton
          title="Add a new addiction"
          onPress={() => navigation.navigate("Setup")}
        />
        {/* List out existing addiction items here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  introSection: {
    marginTop: 20, // Adjust as per your design
    paddingHorizontal: 20, // Side padding
    gap: 5, // Space between the text
  },
  introText: {
    fontSize: 16,
    marginBottom: 10,
  },
  howItWorksSection: {
    marginTop: 20, // Adjust as per your design
    paddingHorizontal: 20, // Side padding
    color: "#ffffff", // Adjust as per your design
    backgroundColor: "#094D69", // Adjust as per your design
    padding: 10, // Padding within the section
    paddingVertical: 20, // Vertical padding within the section
  },
  howItWorksText: {
    fontSize: 16, // Adjust as per your design
    marginBottom: 10,
  },
  addictionList: {
    alignItems: "center", // Center items horizontally
    marginHorizontal: 20, // Adjust as per your design
    display: "flex", // Use flexbox
    flexDirection: "row", // Arrange items horizontally
    flexWrap: "wrap", // Allow multiple rows
    gap: 20, // Space between items
  },
  addButton: {
    width: 60, // Adjust as per your design
    height: 60, // Adjust as per your design
    borderRadius: 30, // Circular button
    backgroundColor: "#094D69", // Adjust as per your design
    justifyContent: "center", // Center '+' vertically
    alignItems: "center", // Center '+' horizontally
  },
  addButtonText: {
    fontSize: 60, // Adjust as per your design
    textAlign: "center", // Center '+' horizontally
    justifyContent: "center", // Center '+' vertically
    color: "#ffffff", // '+' button text color
    padding: 0, // No padding within the button
  },
  boldText: {
    fontWeight: "bold",
  },
  regularText: {
    fontWeight: "normal",
  },
  smallText: {
    fontSize: 12,
  },
  bigText: {
    fontSize: 20,
  },
});

export default Homescreen;
