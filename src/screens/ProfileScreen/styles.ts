import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
const SRC_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  nav: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  mainContainer: {
    flex: 1,  
    width: "100%",
    height: 350,
    alignItems: "center",
    flexDirection: "column",
    gap: 15,
    justifyContent: "space-between",
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
    flex: 1,
  },
  social: {
    flexDirection: "row",
    gap: 5,
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
    width: "100%",
  },
  editButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  textInput: {
    margin: 10,
    fontSize: 14,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  goBackIcon: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  menuIcon: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  photos: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0)',
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
    backgroundColor: 'rgba(52, 52, 52, 0)',
    flexDirection: "row",
    alignItems: "center",
    width: 150,
  },
});

export default styles;
