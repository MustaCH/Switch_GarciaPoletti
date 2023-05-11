import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

const NumberContainer = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default NumberContainer;
