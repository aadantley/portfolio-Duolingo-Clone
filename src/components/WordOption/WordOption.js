import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const WordOption = ({ text, onPress, isSelected }) => {
  return (
    <Pressable
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgray" : "white" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, { color: isSelected ? "lightgray" : "black" }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default WordOption;
