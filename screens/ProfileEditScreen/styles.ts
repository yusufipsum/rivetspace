import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "grey",
    fontSize: 16,
  },
  onaylaButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  vazgecButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "black",
    fontSize: 16,
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
    marginBottom: 5,
    marginTop: 5,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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
