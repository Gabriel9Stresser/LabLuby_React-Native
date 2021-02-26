import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    paddingHorizontal: 10,
  },
  logo: {
    marginBottom: 48.3,
  },
  boxInput: {
    width: 339,
    height: 76,
  },
  info: {
    position: "relative",
    top: -35,
    right: 10,
    width: "100%",
    textAlign: "right",
    color: "#f00",
    zIndex: 2,
  },
  textInput: {
    width: "100%",
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
  button: {
    width: 339,
    height: 56,
    backgroundColor: "#fc0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
  },
});

export default styles;
