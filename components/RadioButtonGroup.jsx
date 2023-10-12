import React from 'react';
import {View} from "react-native";
import RadioButton from "./RadioButton";
import styled from "styled-components/native";

const QuizText = styled.Text`
  font-size: 14px;
  color: #393C41;
  text-align: center;
  margin-bottom: 5px;
  font-family: Helvetica;
  margin-top: 10px;
`

const RadioButtonGroup = ({values, selected, handler}) => {
  const selectHandler = (value) => handler(value);

  return (
    <View>
      <QuizText>
        Выберите и отметьте из списка ниже самое эмоционально заряженное утверждение, отметьте его:
      </QuizText>
      {
        values.map((items, index)  => {
          return (
            <RadioButton
              key={`${items}_${index}`}
              id={`${items}_${index}`}
              label={items}
              selected={`${items}_${index}` === selected}
              onSelect={selectHandler}
            />
          )
      })
      }
    </View>
  );
};

export default RadioButtonGroup;
