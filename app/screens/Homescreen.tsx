import { View, Text } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";
import { Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Homescreen = ({ navigation }: RouterProps) => {
  return (
    <View>
      <Text>Homescreen</Text>
      <View>
        <Button
          title="Specific page"
          onPress={() => navigation.navigate("Specific")}
        />
        <Text>Landing page</Text>
        <Button
          title="Sign Out"
          onPress={() => {
            FIREBASE_AUTH.signOut();
          }}
        />
      </View>
    </View>
  );
};

export default Homescreen;
