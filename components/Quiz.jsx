import {View} from "react-native";
import Animated, { Layout, RollInRight } from "react-native-reanimated";
import styled from 'styled-components/native';
import {useState, useEffect} from "react";
import SecondaryButton from "./SecondaryButton";
import RadioButtonGroup from "./RadioButtonGroup";

const QuizWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  height: 600px;
  background-color: #f5f8fb;
  border-radius: 32px;
  padding: 20px 15px;
  margin: 15px;
`

const QuizText = styled.Text`
  font-size: 16px;
  color: #393C41;
  text-align: center;
  margin-bottom: 5px;
  font-family: Helvetica;
`

const QuizHighlightedText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #ee516e;
  padding: 2px 8px;
  text-align: center;
  margin-bottom: 15px;
  border-radius: 8px;
  font-family: Helvetica;
`

const QuizInput = styled.TextInput`
  font-size: 20px;
  color: #393C41;
  background-color: #fff;
  text-align: center;
  margin-top: 15px;
  padding: 5px;
  border: 2px solid #eeeeef;
  border-radius: 16px;
  font-family: Helvetica;
`

const QuizInputSecondary = styled.TextInput`
  font-size: 20px;
  color: #181b21;
  background-color: #fff;
  text-align: center;
  margin-top: 15px;
  padding: 5px;
  border: 2px solid #181b21;
  border-radius: 16px;
  font-family: Helvetica;
`

const Quiz = (
  {
    id,
    value,
    problemArea,
    setProblemArea,
    quizHandler,
    radioButtonsValue,
    radioButtonHandler,
    selectedRadioButtonsValue,
    setSelectedRadioButtonsValue,
    externalBehavior,
    setExternalBehavior,
    internalState,
    setInternalState,
    mainQuestionsHandler,
  }
  ) => {
  const [inputText, setInputText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [questionValue, setQuestionValue] = useState(value);

  useEffect(() => {
    if (
      inputText.length > 3
      || (selectedRadioButtonsValue && id === 2)
      || (externalBehavior.length > 3 && internalState.length > 3 && id === 3)
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [inputText, selectedRadioButtonsValue, externalBehavior, internalState]);

  useEffect(() => {
    if (id > 3) {
      let newStr = value.replace("__$1__", externalBehavior);
      newStr = newStr.replace("__$2__", internalState);
      setQuestionValue(newStr);
    }
  }, [value]);

  const setValue = () => {
    if (id === 1) {
      setProblemArea(inputText);
      quizHandler();
    }

    if (id === 2 || id === 3) {
      if (!selectedRadioButtonsValue) {
        radioButtonHandler(inputText);
      } else {
        quizHandler();
      }
    }

    if (id > 3) {
      const questionData = {
        question: questionValue,
        answer: inputText,
      }
      mainQuestionsHandler(questionData);
      if (id < 14) {
        quizHandler();
      }
    }
    setInputText('');
  }

  const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    if(keyValue === 'Enter' && showButton) {
      setValue();
    }
  };

  return (
    <Animated.View
      layout={Layout.stiffness()}
      entering={RollInRight}
    >
    <QuizWrapper>
          <View>
            {
              id === 2 ? (
                <>
                  <QuizText>
                    Проблемная область:
                  </QuizText>
                  <QuizHighlightedText>
                    {problemArea}
                  </QuizHighlightedText>
                </>
              ) : null
            }
            {
              id === 3 ? (
                <>
                  <QuizText>
                    Вы выбрали утверждение -
                  </QuizText>
                  <QuizHighlightedText>
                    {selectedRadioButtonsValue.split('_')[0]}
                  </QuizHighlightedText>
                </>
              ) : null
            }
            {
              id === 4 ? (
                <>
                  <QuizText>
                    Ваше убеждение:
                  </QuizText>
                  <QuizHighlightedText>
                    {`${externalBehavior} - ${internalState}`}
                  </QuizHighlightedText>
                </>
              ) : null
            }
            {
              id === 2 && radioButtonsValue.length > 2
                ? null : (
                  <>
                    <QuizText>
                      {questionValue}
                    </QuizText>
                    {
                      id !== 3 ? (
                        <QuizInput
                          onChangeText={setInputText}
                          value={inputText}
                          placeholder="Введите текст"
                          autoFocus={true}
                          onKeyPress={handleKeyPress}
                        />
                      ) : (
                        <>
                          <QuizInputSecondary
                            onChangeText={setExternalBehavior}
                            value={externalBehavior}
                            placeholder="Внешнее поведение"
                          />
                          <QuizInputSecondary
                            onChangeText={setInternalState}
                            value={internalState}
                            placeholder="Внутреннее состояние"
                          />
                        </>
                      )
                    }
                  </>
                )
            }
            {
              ((radioButtonsValue.length > 0) && (id === 2))
                ? <RadioButtonGroup values={radioButtonsValue} handler={setSelectedRadioButtonsValue} selected={selectedRadioButtonsValue}/>
                : null
            }
          </View>

      {
        showButton ? <SecondaryButton title={'Дальше'} action={setValue}/> : null
      }

    </QuizWrapper>
    </Animated.View>
  );
};

export default Quiz;
