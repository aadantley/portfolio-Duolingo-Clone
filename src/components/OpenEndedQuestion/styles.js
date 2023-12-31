import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingTop: 40,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",

    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 20,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  input: {
    backgroundColor: "#ebebeb",
    alignSelf: "stretch",
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
});

export default styles;
