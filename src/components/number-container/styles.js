import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.secundary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 50,
    marginVertical: 10,
  },

  number: {
    fontSize: 25,
    fontFamily: theme.fonts.myBold,
    color: theme.colors.white,
  },
});
