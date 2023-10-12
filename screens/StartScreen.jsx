import styled from 'styled-components/native';
import PrimaryButton from "../components/PrimaryButton";
import {Image} from "react-native";
import rocket from "../assets/icons/icons8-rocket-50.png";

const StartWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 35px 15px;
`

const StartBlock = styled.View`
  padding: 15px;
  height: 100%;
  width: 100%;
  background-color: #f5f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 32px;
`;

const HeaderText = styled.Text`
  font-size: 26px;
  font-weight: 900;
  color: #181b21;
  letter-spacing: 0.1px;
  padding-top: 20px;
  font-family: Helvetica;
`;

const TextWrapper = styled.View`
  margin-bottom: 50px;
`

const ParagraphText = styled.Text`
  font-size: 14px;
  color: #393C41;
  text-align: center;
  margin-bottom: 5px;
  font-family: Helvetica;
`;

const StartScreen = ({navigation}) => {
  const goToQuiz = () => navigation.navigate('Quiz');

  return (
    <StartWrapper>
    <StartBlock>
      <Image source={rocket}/>
      <HeaderText>Изменение убеждений</HeaderText>
      <TextWrapper>
      <ParagraphText>
        На то как мы живем сильно влияют наши убеждения.
      </ParagraphText>
      <ParagraphText>
        Убеждения – это правила, которые говорят и показывают как нам жить.
      </ParagraphText>
      <ParagraphText>
        Они либо ограничивают, либо поддерживают нас.
        Основная суть убеждений – найти подтверждение самих себя во внешнем мире.
      </ParagraphText>
      <ParagraphText>
        Проработка Ограничивающий убеждений изменит наши способности, состояние и поведение.
      </ParagraphText>
      <ParagraphText>
        А, следовательно, и жизнь!
      </ParagraphText>
      </TextWrapper>
      <PrimaryButton action={goToQuiz} title={'Начать'} />
    </StartBlock>
    </StartWrapper>
  );
};

export default StartScreen;
