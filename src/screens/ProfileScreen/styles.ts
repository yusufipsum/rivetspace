import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
const SRC_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tag: {
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
    gap: 7,
  },
  social: {
    flexDirection: "row",
    gap: 5,
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  button: {
    top: 5,
    width: "80%",
    height: 35,
    backgroundColor: "black",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "grey",
  },
  shareButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "white",
    fontWeight: "bold",
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
    margin: 10,
    fontSize: 14,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "90%",
    top: 15,
  },
  goBackIcon: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  menuIcon: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
