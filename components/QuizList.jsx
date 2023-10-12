import { ScrollView, View } from "react-native";
import Quiz from "./Quiz";
import { data, initData } from "../const/quizData";
import styled from 'styled-components/native';
import {useEffect, useState} from "react";
import EndQuiz from "./EndQuiz";

const QuizListWrapper = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
`

const QuizList = () => {
  const [problemArea, setProblemArea] = useState('');
  const [questions, setQuestions] = useState(initData);
  const [radioButtonsValue, setRadioButtonsValue] = useState([]);
  const [selectedRadioButtonsValue, setSelectedRadioButtonsValue] = useState(null);
  const [externalBehavior, setExternalBehavior] = useState('');
  const [internalState, setInternalState] = useState('');
  const [mainQuestions, setMainQuestions] = useState([]);
  const quizHandler = () => {
    const nextQuiz = data[questions.length - 1];
    setQuestions(prev => [nextQuiz, ...prev]);
  };
  const radioButtonHandler = (value) => setRadioButtonsValue(prev => [...prev, value]);
  const mainQuestionsHandler = (value) => setMainQuestions(prev => [...prev, value]);
  const getNewQuiz = () => {
    setProblemArea('');
    setQuestions(initData);
    setRadioButtonsValue([]);
    setSelectedRadioButtonsValue(null);
    setExternalBehavior('');
    setInternalState('');
    setMainQuestions([]);
  }

  return (
    <QuizListWrapper>
      {
        mainQuestions.length === 10 ? (
          <ScrollView>
            <EndQuiz
              getNewQuiz={getNewQuiz}
              externalBehavior={externalBehavior}
              internalState={internalState}
              mainQuestions={mainQuestions}
            />
          </ScrollView>
        ) : (
          <View>
            {
              questions.map(({id, value}) => {
                return (
                  <Quiz
                    key={id}
                    id={id}
                    value={value}
                    problemArea={problemArea}
                    setProblemArea={setProblemArea}
                    quizHandler={quizHandler}
                    radioButtonsValue={radioButtonsValue}
                    radioButtonHandler={radioButtonHandler}
                    selectedRadioButtonsValue={selectedRadioButtonsValue}
                    setSelectedRadioButtonsValue={setSelectedRadioButtonsValue}
                    externalBehavior={externalBehavior}
                    setExternalBehavior={setExternalBehavior}
                    internalState={internalState}
                    setInternalState={setInternalState}
                    mainQuestionsHandler={mainQuestionsHandler}
                    mainQuestions={mainQuestions}
                    getNewQuiz={getNewQuiz}
                  />
                )
              })
            }
          </View>
        )
      }
    </QuizListWrapper>
  );
};

export default QuizList;
