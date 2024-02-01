import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  SnusIcon,
  RoykIcon,
  PengespillIcon,
  RusmidlerIcon,
  AlkoholIcon,
  AnnetIcon,
} from "../components/Icons"; // Assuming you have an Icon component

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Snus",
      value: "Snus",
      icon: () => <SnusIcon height={20} width={20} />,
    },
    {
      label: "Røyk",
      value: "Røyk",
      icon: () => <RoykIcon height={20} width={20} />,
    },
    {
      label: "Pengespill",
      value: "Pengespill",
      icon: () => <PengespillIcon height={20} width={20} />,
    },
    {
      label: "Rusmidler",
      value: "Rusmidler",
      icon: () => <RusmidlerIcon height={20} width={20} />,
    },
    {
      label: "Alkohol",
      value: "Alkohol",
      icon: () => <AlkoholIcon height={20} width={20} />,
    },
    {
      label: "Annet",
      value: "Annet",
      icon: () => <AnnetIcon height={20} width={20} />,
    },
  ]);
  const [customValue, setCustomValue] = useState("");

  const handleValueChange = (value: any) => {
    setValue(value);
    if (value === "Annet") {
      setCustomValue("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Select an option:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange}
        setItems={setItems}
        placeholder="Velg en kategori"
        style={styles.dropdownStyle}
        dropDownContainerStyle={styles.dropdownContainerStyle}
      />
      {value === "Annet" && (
        <View style={styles.customInputContainer}>
          <Text>Write your own suggestion:</Text>
          <TextInput
            style={styles.textInputStyle}
            value={customValue}
            onChangeText={setCustomValue}
            placeholder="Type here..."
          />
        </View>
      )}
      {value && <Text>Selected: {value}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Adjust your container styles as needed
  },
  dropdownStyle: {
    // Style your dropdown
  },
  dropdownContainerStyle: {
    // Style your dropdown container
  },
  customInputContainer: {
    // Style for the custom input container
  },
  textInputStyle: {
    // Style for the TextInput
  },
});

export default Dropdown;
