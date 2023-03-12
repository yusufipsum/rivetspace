import { Dimensions, StyleSheet } from "react-native";
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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  tag: {
    flex: 0.8,
    backgroundColor: "white",
    width: SRC_WIDTH - 50,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: "flex-start",
    padding: 20,
    gap: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tagTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 30,
  },
  tagRight: {
    marginTop: 10,
    gap: 10,
  },
  social: {
    flexDirection: "row",
    gap: 5,
  },
  button: {
    marginTop: 5,
    width: "30%",
    height: 35,
    backgroundColor: "black",
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
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  vazgecButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "white",
    fontSize: 16,
  },
  newPostContainer: {
    flex: 1,
    width: "100%",
    height: 350,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  textInput: {
    margin: 10,
    fontSize: 14,
    alignSelf: "center",
  },
  headerText: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nameText: {
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
    bottom: -30,
    alignSelf: "center",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "#26a9e1",
    marginRight: 5,
  },
  point: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
