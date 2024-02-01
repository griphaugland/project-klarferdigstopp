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
import { Picker } from "@react-native-picker/picker";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import StandardButton, { SecondaryButton } from "../../app/components/Button";
import Dropdown from "../../app/components/Dropdown";

const Setup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleCreateAddiction = () => {
    // Add your logic here to create the addiction item
  };
  const formOpacity = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Animated.View style={[styles.form, { opacity: formOpacity }]}>
          <KeyboardAvoidingView behavior="padding">
            <Dropdown />
            {category === "custom" && (
              <TextInput
                style={styles.input}
                placeholder="Custom Category"
                value={category}
                onChangeText={(text) => setCategory(text)}
                autoCapitalize="none"
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType="numeric"
            />
            <StandardButton
              title="Create Addiction"
              onPress={handleCreateAddiction}
            />
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

export default Setup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  input: {
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
  picker: {
    marginVertical: 4,
    height: 50,
    borderWidth: 0,
    borderColor: "#000000",
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
{
  /* <Picker
              style={styles.picker}
              selectedValue={category}
              onValueChange={(itemValue: string) => setCategory(itemValue)}
            >
              <Picker.Item label="Snus" value="Snus" />
              <Picker.Item label="Røyk" value="Røyk" />
              <Picker.Item label="Pengespill" value="Pengespill" />
              <Picker.Item label="Rusmidler" value="Rusmidler" />
              <Picker.Item label="Alkohol" value="Alkohol" />
              <Picker.Item label="Annet" value="Annet" />
            </Picker> */
}
