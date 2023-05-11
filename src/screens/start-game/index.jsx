import {
  View,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  Button,
  Keyboard,
  Alert,
} from "react-native";
import { Card, Header, NumberContainer } from "../../components/index";
import { styles } from "./styles";
import { theme } from "../../constants";
import { useState } from "react";

const StartGame = ({ onStartGame }) => {
  const [numberOpt, setNumberOpt] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);

  const onHandleChangeText = (text) => {
    setNumberOpt(text.replace(/[^0-9]/g, ""));
  };

  const onHandleConfirm = () => {
    const chosenNum = Number(numberOpt);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: () => setNumberOpt("") },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNum(chosenNum);
      setNumberOpt("");
    }
  };

  const onHandleReset = () => {
    setNumberOpt("");
    setConfirmed(false);
    setSelectedNum(null);
  };

  const onHandleStart = () => {
    onStartGame(selectedNum);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Selected Number</Text>
        <NumberContainer number={selectedNum} />
        <Button
          title="Start Game"
          onPress={onHandleStart}
          color={theme.colors.primary}
        />
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Choose a number</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            onChangeText={onHandleChangeText}
            value={numberOpt}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              onPress={onHandleReset}
              color={theme.colors.secundary}
            />
            <Button
              title="Confirm"
              onPress={onHandleConfirm}
              color={theme.colors.primary}
              disabled={numberOpt === ""}
            />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
