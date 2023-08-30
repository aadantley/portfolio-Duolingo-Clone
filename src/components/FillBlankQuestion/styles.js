import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginVertical: 10,
    height: 50,
    justifyContent: "center",
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    height: 50,
    width: "25%",
  },
  optionContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
