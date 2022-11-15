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
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingRight: 15,
  },
  button: {
    marginTop: 5,
    width: "30%",
    height: 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "grey",
  },
  onaylaButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "black",
    fontWeight: "bold",
  },
  vazgecButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "black",
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
    fontSize: 20,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    height: 1,
    width: "90%",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default styles;
