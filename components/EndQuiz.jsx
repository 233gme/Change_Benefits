import styled from "styled-components/native";
import PrimaryButton from "./PrimaryButton";

const QuizHeader = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #181b21;
  text-align: center;
  font-family: Helvetica;
  margin-bottom: 20px;
  margin-top: 25px;
`

const QuizText = styled.Text`
  font-size: 16px;
  color: #181b21;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 25px;
  font-family: Helvetica;
`

const QuizHighlightedText = styled.Text`
  font-size: 16px;
  color: #ee516e;
  padding: 2px 8px;
  text-align: center;
  margin-bottom: 15px;
  border-radius: 8px;
  font-family: Helvetica;
`

const Wrapper = styled.ScrollView`
  margin: 15px 5px;
  padding: 10px;
  background-color: #e2f7fc;
  border-radius: 32px;
`


const EndQuiz = ({externalBehavior, internalState, mainQuestions, getNewQuiz}) => {
  return (
    <Wrapper>
      <QuizHeader>Хорошая работа!</QuizHeader>
      <QuizText>
        Ваше старое убеждение:
      </QuizText>
      <QuizHighlightedText>
        {`${externalBehavior} ${internalState}`}
      </QuizHighlightedText>
      <QuizText>
        Ваше новое убеждение:
      </QuizText>
      <QuizHighlightedText>
        {mainQuestions[mainQuestions.length - 1].answer}
      </QuizHighlightedText>
      <QuizText>
        Сейчас, когда у Вас уже есть новое убеждение взамен старого, Вы можете окончательно закрепить проработку проделав следующее:
      </QuizText>
      <QuizText>
        1. Подумайте или вспомните состояние, в котором ваша каждая клетка тела говорит «Нет». Как вы это чувствуете внутри? Усильте это состояние и заякорьте его любым удобным способом (прикосновением, звуком, образом, символом, словом).
      </QuizText>
      <QuizText>
        2. Ощущая это мощное состояние «Нет», примените его к вашему ограничивающему убеждению. Продолжайте говорить ему «Нет» до тех пор, пока не почувствуете, что оно уже больше не имеет силы и вы в него не верите.
      </QuizText>
      <QuizText>
        3. Войдите в состояние «Да». Подумайте или вспомните состояние, в котором ваша каждая клетка тела говорит «Да». Почувствуйте это «Да». Как оно отличается от «Нет»? Усильте это состояние и заякорьте его любым удобным способом (прикосновением, звуком, образом, символом, словом).
      </QuizText>
      <QuizText>
        4. Ощущая это мощное состояние «Да», примените его к вашей новой полезной мысли, которую вы выбрали на шаге 2. Продолжайте говорить ей «Да» до тех пор, пока не появится стойкое ощущение, что она становится частью вашей жизни.
      </QuizText>

      <PrimaryButton title={'Проработать новое?'} action={getNewQuiz}/>
    </Wrapper>
  );
};

export default EndQuiz;
