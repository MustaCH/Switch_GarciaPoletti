import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
  },

  content: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },

  title: {
    fontSize: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
