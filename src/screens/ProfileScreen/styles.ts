import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    width: "90%",
    textAlign: "center",
    fontSize: 16,
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
