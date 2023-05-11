import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  label: {
    fontSize: 18,
    textAlign: "center",
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secundary,
    minWidth: 80,
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
  },

  buttonContainer: {
    marginTop: 25,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  confirmedContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  confirmedTitle: {
    fontSize: 15,
  },
});
