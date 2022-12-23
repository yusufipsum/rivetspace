import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    alignItems: "center",
  },
  title: {
    fontFamily: "Baskerville-Bold",
    fontWeight: "bold",
    fontSize: 34,
    color: "black",
  },
  sectionCenter: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "auto",
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 35,
    borderBottomWidth: 1,
    borderColor: "#f7f7f7",
  },
  inputs: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 90,
  },
  forgotPassword: {
    alignItems: "flex-end",
    width: "80%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 60,
    backgroundColor: "black",
    borderRadius: 30,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  footer: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 110,
    width: "100%",
  },
  text: {
    fontSize: 14,
    color: "grey",
  },
  sign: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
