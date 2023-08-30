import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    //border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 20,

    // spacing
    padding: 10,

    //size
    width: "48%",
    height: "48%",

    //align
    alignItems: "center",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  optionText: {
    fontWeight: "bold",
  },
  selectedText: {
    fontWeight: "bold",
    color: "#4BBEF7",
  },
});

export default styles;
