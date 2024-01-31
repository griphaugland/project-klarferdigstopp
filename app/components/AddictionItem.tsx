// src/components/AddictionItem.tsx

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface AddictionItemProps {
  name: string;
  imageUri: string;
  daysClean: number;
}

const AddictionItem: React.FC<AddictionItemProps> = ({
  name,
  imageUri,
  daysClean,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>{`Clean for ${daysClean} days`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
});

export default AddictionItem;
