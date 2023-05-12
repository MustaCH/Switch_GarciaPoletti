import { Alert, Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import { styles } from "./styles";
import { theme } from "../../constants";
import { useState, useRef, useEffect } from "react";

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

const Game = ({ userNumber, onGameOVer }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(minNumber, maxNumber, userNumber)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(minNumber);

  const currentHigh = useRef(maxNumber);

  const onHandleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Ups!", "Thats wrong, try again...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRound) => currentRound + 1);
  };

  useEffect(() => {
    if (currentGuess === userNumber) onGameOVer(rounds);
  }, [currentGuess, userNumber, onGameOVer]);

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Guess the number</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            title="Lower"
            color={theme.colors.secundary}
            onPress={() => onHandleNextGuess("lower")}
          />
          <Button
            title="Higher"
            color={theme.colors.primary}
            onPress={() => onHandleNextGuess("higher")}
          />
        </View>
      </Card>
    </View>
  );
};

export default Game;
