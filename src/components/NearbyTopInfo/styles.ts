import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topContainer: {
    width: "90%",
    height: 90,
    backgroundColor: "#fff",
    margin: 8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 40,
    zIndex: 2,
  },
  topFlatList: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    paddingBottom: 5,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 14,
    color: "#016894",
    width: "100%",
    textAlign: "center",
  },
  images: {
    width: 50,
    height: 50,
    marginLeft: -10,
    marginRight: -10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  lastImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    position: "absolute",
  },
  restText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    width: "100%",
    textAlign: "center",
  },
});

export default styles;
