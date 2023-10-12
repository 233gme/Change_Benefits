import React from 'react';
import styled from 'styled-components/native';

const RadioButtonWrapper = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 16px;
  border: 2px solid #afdae8;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

const RadioButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #181b21;
  letter-spacing: 0.1px;
`

const RadioButton = ({ id, label, selected, onSelect }) => {
  const onSelectHandler = () => onSelect(id);

  return (
    <RadioButtonWrapper onPress={onSelectHandler} style={{backgroundColor: selected ? '#afdae8' : 'transparent'}}>
      <RadioButtonText>
        {label}
      </RadioButtonText>
    </RadioButtonWrapper>
  );
}

export default RadioButton;
