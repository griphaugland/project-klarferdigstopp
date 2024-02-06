import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";
import {
  SnusIcon,
  RoykIcon,
  PengespillIcon,
  RusmidlerIcon,
  AlkoholIcon,
  AnnetIcon,
} from "../components/Icons"; // Assuming you have an Icon component

interface DropdownProps {
  onValueChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onValueChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<ItemType<string>[]>([
    {
      label: "Snus",
      value: "Snus",
      icon: () => <SnusIcon height={14} width={16} />,
    },
    {
      label: "Røyk",
      value: "Røyk",
      icon: () => <RoykIcon height={14} width={16} />,
    },
    {
      label: "Pengespill",
      value: "Pengespill",
      icon: () => <PengespillIcon height={14} width={16} />,
    },
    {
      label: "Rusmidler",
      value: "Rusmidler",
      icon: () => <RusmidlerIcon height={14} width={16} />,
    },
    {
      label: "Alkohol",
      value: "Alkohol",
      icon: () => <AlkoholIcon height={14} width={16} />,
    },
    {
      label: "Annet",
      value: "Annet",
      icon: () => <AnnetIcon height={14} width={16} />,
    },
  ]);
  const [customValue, setCustomValue] = useState("");

  useEffect(() => {
    // This effect handles the synchronization between the selected value and the custom input
    if (value === "Annet" && customValue) {
      onValueChange(customValue); // Use the custom value when "Annet" is selected and customValue is not empty
    } else if (value && value !== "Annet") {
      onValueChange(value); // Use the selected value directly when it's not "Annet"
    }
  }, [value, customValue]);
  const handleValueChange = (selectedValue: string) => {
    setValue(selectedValue);
    if (selectedValue !== "Annet") {
      onValueChange(selectedValue); // Update for standard values
    }
  };

  const handleCustomValueChange = (text: string) => {
    setCustomValue(text);
    // No need to call onValueChange here directly, useEffect will handle it
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
        setValue={setValue} // Pass setValue directly
        setItems={setItems}
        placeholder="Velg her"
        style={styles.dropdownStyle}
        dropDownContainerStyle={styles.dropdownContainerStyle}
        listItemLabelStyle={styles.listItemLabelStyle}
        listItemContainerStyle={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderWidth: 0,
          borderColor: "#094D69",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      />
      {value === "Annet" && (
        <View style={styles.customInputContainer}>
          <Text style={styles.questionText}>Skriv inn din avhengighet</Text>
          <TextInput
            style={styles.textInputStyle}
            value={customValue}
            onChangeText={(text) => setCustomValue(text)} // Directly update customValue on change
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
    borderRadius: 5,
    height: 50,
    // Style your dropdown
  },
  listItemLabelStyle: {
    color: "#000000",
    justifyContent: "space-between",
    // Style your dropdown list item label
  },
  dropdownContainerStyle: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    minHeight: 240,
    borderColor: "#094D69",
    borderRadius: 5,
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
