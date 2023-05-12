import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: width * 0.85,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },

  roundsNum: {
    fontFamily: "Poppins-Black",
    fontSize: 18,
    paddingVertical: 10,
  },

  selected: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
});
