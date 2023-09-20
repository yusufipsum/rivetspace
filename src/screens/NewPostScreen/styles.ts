import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "black",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    paddingHorizontal: 20,
    color: "black",
  },
  shareButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  newPostContainer: {
    flex: 1,
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
  iconContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  iconText: {
    fontSize: 10,
    color: "black",
  },
});

export default styles;
