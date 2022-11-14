import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    width: "100%",
    paddingRight: 15,
    top: 7,
  },
  button: {
    top: 5,
    width: "80%",
    height: 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "grey",
  },
  shareButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "black",
    fontWeight: "bold",
  },
  newPostContainer: {
    width: "100%",
    height: 350,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  textInput: {
    width: "90%",
    textAlign: "center",
    fontSize: 16,
  },
  headerText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
