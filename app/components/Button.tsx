// src/components/Button.tsx

import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const StandardButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const AddButton: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#094D69", // Adjust as per your design
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#094D69",
    borderStyle: "solid",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#ededede", // Adjust as per your design
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#094D69",
    borderStyle: "solid",
  },
  secondaryText: {
    color: "#094D69",
    fontWeight: "bold",
  },
  addButton: {
    width: 80, // Adjust as per your design
    height: 80, // Adjust as per your design
    borderRadius: 40, // Circular button
    backgroundColor: "#094D69", // Adjust as per your design
    justifyContent: "center", // Center '+' vertically
    alignItems: "center", // Center '+' horizontally
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    height: 80, // Adjust as per your design
    width: 80, // Adjust as per your design
    alignSelf: "center",
    fontSize: 60, // Adjust as per your design
    color: "#ffffff", // '+' button text color
    padding: 0, // No padding within the button
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 0,
  },
});

export default StandardButton;
