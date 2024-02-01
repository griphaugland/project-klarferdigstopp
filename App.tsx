import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import Homescreen from "./app/screens/Homescreen";
import Specific from "./app/screens/Specific";
import { User } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import LoadingState from "./app/components/Loadingstate"; // Ensure this path is correct
import Header from "./app/components/Header"; // Ensure this path is correct
import { StyleSheet, View, Text } from "react-native";
import Setup from "./app/screens/Setup";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

// src/navigation/navigation-types.ts

export type RootStackParamList = {
  Homescreen: undefined;
  Specific: undefined;
  Login: undefined;
  Setup: undefined;
  // ... add other screens and their parameters here
};

function InsideLayout() {
  return (
    <InsideStack.Navigator screenOptions={{ header: () => <Header /> }}>
      <InsideStack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          animation: "fade", // Use "fade", "slide_from_right", "slide_from_left", etc.
        }}
      />
      <InsideStack.Screen
        name="Specific"
        component={Specific}
        options={{
          animation: "fade", // Use "fade", "slide_from_right", "slide_from_left", etc.
        }}
      />
      <InsideStack.Screen
        name="Setup"
        component={Setup}
        options={{
          animation: "fade", // Use "fade", "slide_from_right", "slide_from_left", etc.
        }}
      />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          OpenSansRegular: require("./assets/fonts/OpenSansRegular.ttf"),
          OpenSansBold: require("./assets/fonts/OpenSansBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  if (!appIsReady) {
    return <LoadingState />; // Your loading component
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {user ? (
            <Stack.Screen
              name="Inside"
              component={InsideLayout}
              options={{
                headerShown: false,
                animation: "fade", // Use "fade", "slide_from_right", "slide_from_left", etc.
              }}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                animation: "fade", // Use "fade", "slide_from_right", "slide_from_left", etc.
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 150, // Maximum width of the logo
    height: 150, // Maximum height of the logo
    maxWidth: 150, // Ensures the logo does not exceed the maximum width
    maxHeight: 150, // Ensures the logo does not exceed the maximum height
  },
});
