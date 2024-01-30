import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import Homescreen from "./app/screens/Homescreen";
import Specific from "./app/screens/Specific";
import { useState } from "react";
import { User } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function insideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Homescreen" component={Homescreen} />
      <InsideStack.Screen name="Specific" component={Specific} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={insideLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
