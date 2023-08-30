import {
  Image,
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import PropTypes from "prop-types";
import { useState } from "react";

// local
import mascot from "../../../assets/images/mascot.png";
import styles from "./styles";
import Button from "../Button";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        {/* Image */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
        {/* Sentence Container */}
      </View>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <>
          <TextInput
            value={input}
            style={styles.input}
            placeholder="Type in English"
            onChangeText={setInput}
            returnKeyType="done"
            keyboardType="default"
            blurOnSubmit={true}
            multiline={true}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          ></TextInput>
        </>
      </TouchableWithoutFeedback>

      <Button text="Check" onPress={onButtonPress} disabled={!input} />
    </>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
  onCorrect: PropTypes.func,
  onWrong: PropTypes.func,
};

export default OpenEndedQuestion;
