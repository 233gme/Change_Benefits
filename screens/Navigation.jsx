import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name={'Start'} component={StartScreen} options={{ title: 'Тренажёр по изменению убеждений' }}/>
        <Stack.Screen name={'Quiz'} component={QuizScreen} options={{ title: 'Тренажёр по изменению убеждений' }}/>
      </Stack.Navigator>
      <StatusBar style={"auto"}/>
    </NavigationContainer>
  )
}

export default Navigation;
