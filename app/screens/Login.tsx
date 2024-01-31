import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import StandardButton, { SecondaryButton } from "../../app/components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  const auth = FIREBASE_AUTH;
  const logoAnim = useRef(new Animated.Value(1)).current;
  const formOpacity = useRef(new Animated.Value(0)).current; // New animated value for form opacity

  useEffect(() => {
    // Simulerer app-klargjøring
    setTimeout(() => {
      setIsAppReady(true);
      Animated.parallel([
        Animated.timing(logoAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(formOpacity, {
          // Fade in the form
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000); // Juster denne tiden basert på faktisk lastetid
  }, []);

  const signIn = async () => {
    setLoading(true);
    setError(""); // Reset error message
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError("Login failed. Please check your username and password."); // Set a user-friendly error message
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    setError(""); // Reset error message
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check your email for verification");
    } catch (error) {
      console.log(error);
      setError("Registration failed. Please try again."); // Set a user-friendly error message
    } finally {
      setLoading(false);
    }
  };
  if (!isAppReady) {
    return (
      <View style={styles.loading}>
        <Animated.Image
          source={require("../../assets/media/klarferdigstopplogo-loader.png")}
          resizeMode="contain"
          style={[
            styles.logo,
            {
              transform: [
                {
                  translateY: logoAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -150], // Juster etter behov
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Animated.Image
          source={require("../../assets/media/klarferdigstopplogo-loader.png")}
          resizeMode="contain"
          style={[
            styles.logo,
            {
              transform: [
                {
                  translateY: logoAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 120], // Juster etter behov
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <View style={styles.form}>
        <Animated.View style={[styles.form, { opacity: formOpacity }]}>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <StandardButton title="Log in" onPress={signIn} />
            <SecondaryButton title="Sign up" onPress={signUp} />
            <View style={styles.loadspace}>
              {loading ? (
                <ActivityIndicator size="small" color="#094D69" />
              ) : error ? (
                <Text style={styles.errorMessage}>{error}</Text>
              ) : null}
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 4,
    height: 50,
    borderWidth: 0,
    borderColor: "#ccc",
    padding: 15,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
  },
  logo: {
    width: 150, // Maximum width of the logo
    height: 150, // Maximum height of the logo
    maxWidth: 150, // Ensures the logo does not exceed the maximum width
    maxHeight: 150, // Ensures the logo does not exceed the maximum height
    alignSelf: "center",
    position: "absolute",
    marginTop: 40,
  },
  headertext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 20,
    color: "#094D69",
    marginHorizontal: 20,
  },
  loadspace: {
    marginTop: 10,
    height: 50,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "auto",
  },
  errorMessage: {
    color: "red",
  },
});
