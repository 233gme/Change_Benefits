import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0ebf0;
  padding: 12px 24px;
  border-radius: 30px;

`
const BtnText = styled.Text`
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 800;
  color: #181b21;
  font-family: Helvetica;
`

const SecondaryButton = ({title, action}) => (
  <Btn onPress={action}>
    <BtnText>{title}</BtnText>
  </Btn>
);

export default SecondaryButton;
