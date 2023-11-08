import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
const SRC_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    width: "100%",
  },
  editableName: {
    gap: 7,
  },
  footerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tagContainer: {
    backgroundColor: "white",
    width: SRC_WIDTH - 50,
    marginTop: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "flex-start",
    padding: 20,
    gap: 10,
    shadowOffset: { width: -2, height: 6 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 1,
    marginBottom: 5,
    borderColor: "lightgrey",
    elevation: 6,
  },
  tagLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 30,
  },
  tagRight: {
    marginTop: 10,
    gap: 7,
  },
  social: {
    flexDirection: "row",
    gap: 5,
  },
  button: {
    width: "30%",
    height: 35,
    backgroundColor: "black",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    width: 90,
    color: "grey",
    fontSize: 14,
  },
  onaylaButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  vazgecButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  mainContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: 15,
    justifyContent: "space-between",
  },
  textInput: {
    fontSize: 14,
    alignSelf: "flex-start",
    height: 40,
  },
  headerText: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nameText: {
    width: 106,
    fontSize: 18,
    fontWeight: "bold",
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    height: 1,
    width: "90%",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 12,
  },
  changeImage: {
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 0,
  },
  deleteImage: {
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    bottom: -20,
    alignSelf: "center",
  },
  images: {
    marginTop: 10,
    width: SRC_WIDTH,
    alignItems: "center",

  },
  addImage: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    bottom: 110,
  },
});

export default styles;
