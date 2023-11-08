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
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
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
    elevation: 6,
    zIndex: 1,
  },
  tagLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: 'rgba(52, 52, 52, 0)',
    gap: 30,
  },
  tagRight: {
    marginTop: 10,
    gap: 7,
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0)',
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
    zIndex: 1,
    margin: 15,
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
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  textInput: {
    margin: 8,
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
