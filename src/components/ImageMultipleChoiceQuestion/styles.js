import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingTop: 30,
    paddingBottom: 20,
  },
  optionsContainer: {
    width: "100%",

    // flex
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default styles;
