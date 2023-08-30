// module imports
import { View, Text } from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// local
import WordOption from "../WordOption";
import Button from "../Button";
import styles from "./styles";

// component
const FillBlankQuestion = ({ question, onCorrect, onWrong }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onButtonPress = () => {
    if (selectedOptions.toString() === question.correct.toString()) {
      onCorrect();
    } else {
      onWrong();
    }
    setSelectedOptions([]);
  };

  const addOptionToSelected = (option) => {
    numberOfBlanks = question.parts.filter((part) => part.isBlank).length;
    if (numberOfBlanks > selectedOptions.length) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  let blankIndex = -1;

  const removeOptionFromSelected = (option) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOptions) => selectedOptions === option)
    );
  };

  return (
    <>
      <Text style={styles.title}>Complete the Sentence</Text>
      <View style={styles.row}>
        {question.parts.map((part) => {
          if (part.isBlank) {
            blankIndex++;
            return (
              <View style={styles.blank} key={uuidv4()}>
                {selectedOptions.length > blankIndex && (
                  <WordOption
                    text={selectedOptions[blankIndex]}
                    onPress={() =>
                      removeOptionFromSelected(selectedOptions[blankIndex])
                    }
                  />
                )}
              </View>
            );
          } else {
            return (
              <Text style={styles.text} key={uuidv4()}>
                {part.text}
              </Text>
            );
          }
        })}
        <Text style={styles.text}>{question.text} </Text>
      </View>
      <View style={styles.optionContainer}>
        {question.options.map((option) => (
          <WordOption
            key={uuidv4()}
            text={option}
            isSelected={selectedOptions.includes(option)}
            onPress={() => addOptionToSelected(option)}
          />
        ))}
      </View>
      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={!selectedOptions}
      />
    </>
  );
};

export default FillBlankQuestion;
