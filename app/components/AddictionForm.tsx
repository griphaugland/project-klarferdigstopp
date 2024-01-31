// src/components/AddAddictionForm.tsx

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface AddAddictionFormProps {
  onSubmit: (name: string, description: string) => void;
}

const AddAddictionForm: React.FC<AddAddictionFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Addiction Name"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description (Optional)"
        multiline
      />
      <Button
        title="Start Tracking"
        onPress={() => onSubmit(name, description)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddAddictionForm;
