// library imports
import { StatusBar } from "expo-status-bar";
import { View, Alert, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Local
import FillBlankQuestion from "./src/components/FillBlankQuestion/";
import Header from "./src/components/Header";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import styles from "./App.styles";

// Data imports
// import questions from "./assets/data/imageMulatipleChoiceQuestions.js";
// import questions from "./assets/data/openEndedQuestions";
import questions from "./assets/data/allQuestions";

// App Component
export default function App() {
  // state variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  // event handlers
  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("game over", "try again", [
        {
          text: "Try again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Wrong");
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const loadedCurrentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (loadedCurrentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(loadedCurrentQuestionIndex));
    }
    setHasLoaded(true);
  };

  // side effects
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("Reached last question");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  ////////////////////////////////
  // App Component
  ////////////////////////////////
  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillBlankQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}
