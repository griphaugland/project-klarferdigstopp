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
import { globalStyles } from "../../style";

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
      <Text style={styles.headerText}>Sett Opp</Text>
      <Text style={styles.questionText}>Hva sliter du med?</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange}
        setItems={setItems}
        placeholder="Velg din avhengighet"
        style={styles.dropdownStyle}
        dropDownContainerStyle={styles.dropdownContainerStyle}
      />
      {value === "Annet" && (
        <View style={styles.customInputContainer}>
          <Text style={styles.questionText}>Skriv inn din avhengighet</Text>
          <TextInput
            style={styles.textInputStyle}
            value={customValue}
            onChangeText={setCustomValue}
            placeholder="Skriv inn egen kategori"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    minHeight: 130,
    // Adjust your container styles as needed
  },
  questionText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
    // Adjust your question text styles as needed
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#094D69",
    // Adjust your header text styles as needed
  },
  dropdownStyle: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    borderColor: "#094D69",
    // Style your dropdown
  },
  dropdownContainerStyle: {
    backgroundColor: "#ffffff",
    minHeight: 245,
    borderColor: "#094D69",
    // Style your dropdown container
  },
  customInputContainer: {
    marginVertical: 10,
    height: 50,
    borderWidth: 0,
    borderColor: "#ccc",
    padding: 15,
    paddingHorizontal: 0,
    marginBottom: 60,
    borderRadius: 5,

    // Style for the custom input container
  },
  textInputStyle: {
    marginVertical: 10,
    height: 50,
    borderWidth: 0,
    borderColor: "#ccc",
    padding: 15,
    paddingHorizontal: 0,
    marginBottom: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    // Style for the TextInput
  },
});

export default Dropdown;
