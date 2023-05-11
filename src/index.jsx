import { View } from "react-native";
import { Game, StartGame } from "./screens/index";
import { styles } from "./styles";
import { useState } from "react";
import { Header } from "./components";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const headerTitle = userNumber ? "Game" : "Welcome";

  const Content = () =>
    userNumber ? (
      <Game userNumber={userNumber} />
    ) : (
      <StartGame onStartGame={onStartGame} />
    );
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
