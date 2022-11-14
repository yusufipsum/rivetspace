import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 0,
    height: windowHeight,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    zIndex: 1,
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#26a9e1",
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#26a9e1",
  },
  shareButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "white",
    fontWeight: "bold",
  },
  newPostContainer: {
    flexDirection: "row",
    top: 8,
    padding: 10,
  },
  inputContainer: {
    marginLeft: 10,
    width: "85%",
  },
  textInput: {
    height: 400,
    fontSize: 16,
    textAlignVertical: "top",
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  iconText: {
    fontSize: 10,
    color: "#26a9e1",
  },
});

export default styles;
