import { Text, View, Image, Button } from "react-native";
import { Card } from "../../components/index";
import { styles } from "./styles";
import { theme } from "../../constants";

const GameOver = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image
          source={{
            uri: "https://as01.epimg.net/meristation/imagenes/2019/12/11/reportajes/1576046683_329028_1576055461_portada_normal.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.roundsNum}>Rounds: {rounds}</Text>
        <Text style={styles.selected}>Selected number: {userNumber}</Text>
        <Button
          title="Restart Game"
          color={theme.colors.primary}
          onPress={onRestart}
        />
      </Card>
    </View>
  );
};

export default GameOver;
