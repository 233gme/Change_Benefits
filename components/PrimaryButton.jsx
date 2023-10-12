import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181b21;
  padding: 0 30px;
  height: 36px;
  border-radius: 50%;
  font-family: Helvetica;
`

const BtnText = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: #fff;
`

const PrimaryButton = ({title, action}) => (
  <Btn onPress={action}>
    <BtnText>{title}</BtnText>
  </Btn>
);

export default PrimaryButton;
