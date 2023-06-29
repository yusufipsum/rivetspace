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
    justifyContent: "center",
    alignItems: "center",
  },
  tagContainer: {
    backgroundColor: "white",
    width: SRC_WIDTH - 50,
    marginTop: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: "flex-start",
    padding: 20,
    gap: 10,
    shadowOffset: { width: -2, height: 6 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 1,
    borderWidth: .4,
    borderColor: "lightgrey",
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
  mainContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: 15,
    justifyContent: "space-between",
  },
  textInput: {
    margin: 10,
    fontSize: 14,
    alignSelf: "center",
    height: 50,
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
  dot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "#26a9e1",
    marginRight: 5,
  },
  point: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  images: {
    flex: 1,
    marginTop: 10,
    width: SRC_WIDTH,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  addImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
