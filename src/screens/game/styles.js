import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constants";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
  },

  content: {
    height: height * 0.28,
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
