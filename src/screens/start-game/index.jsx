import {
  View,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { Card, Header } from "../../components/index";
import { styles } from "./styles";
import { theme } from "../../constants";
import { useState } from "react";

const StartGame = () => {
  const [numberOpt, setNumberOpt] = useState("");

  const onHandleChangeText = (text) => {
    setNumberOpt(text.replace(/[^0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Welcome" />
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
              onPress={() => {}}
              color={theme.colors.secundary}
            />
            <Button
              title="Confirm"
              onPress={() => {}}
              color={theme.colors.primary}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
