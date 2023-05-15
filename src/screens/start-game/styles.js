import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constants";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  keyboardCont: {
    flex: 1,
  },

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
    height: height * 0.25,
    marginHorizontal: 20,
    marginTop: 30,
  },

  inputContainerLandscape: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.4,
    marginHorizontal: 20,
    marginTop: 30,
  },

  label: {
    fontSize: 18,
    fontFamily: theme.fonts.myLight,
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
    height: height * 0.25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  confirmedContainerLandscape: {
    height: height * 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  confirmedTitle: {
    fontSize: 15,
    fontFamily: theme.fonts.myReg,
  },
});
