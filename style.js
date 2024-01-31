// styles.js
import { StyleSheet } from "react-native";

export const fonts = {
  regular: "OpenSansRegular",
  bold: "OpenSansMedium",
};

export const globalStyles = StyleSheet.create({
  regularText: {
    fontFamily: fonts.regular,
    // other styles like fontSize, color, etc.
  },
  boldText: {
    fontFamily: fonts.bold,
    // other styles like fontSize, color, etc.
  },
  smallText: {
    fontSize: 16,
  },
  bigText: {
    fontSize: 20,
  },
  // ... more styles
});
