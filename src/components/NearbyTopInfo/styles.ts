import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topContainer: {
    width: "90%",
    height: 90,
    backgroundColor: "#C6EEFF",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  topFlatList: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    paddingBottom: 7,
    fontSize: 16,
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
  },
});

export default styles;
