import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    //border
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
  textContainer: {
    borderColor: "#fff",
    borderBottomWidth: 1.25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
