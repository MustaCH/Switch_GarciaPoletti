import { Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import { styles } from "./styles";
import { theme } from "../../constants";
import { useState } from "react";

const minNumber = 1;
const maxNumber = 99;

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const Game = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(minNumber, maxNumber, userNumber)
  );

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Guess a number</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            title="Lower"
            color={theme.colors.secundary}
            onPress={() => {}}
          />
          <Button
            title="Greater"
            color={theme.colors.primary}
            onPress={() => {}}
          />
        </View>
      </Card>
    </View>
  );
};

export default Game;
