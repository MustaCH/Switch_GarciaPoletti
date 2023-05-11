import { ActivityIndicator, View } from "react-native";
import { Game, StartGame } from "./screens/index";
import { styles } from "./styles";
import { useState } from "react";
import { Header } from "./components";
import { useFonts } from "expo-font";
import { theme } from "./constants";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Ligth": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraLigth": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size={"large"} color={theme.colors.primary} />;
  }

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
