import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: theme.colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
});
