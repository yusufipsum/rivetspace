import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  downIcon: {
    right: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  commentIcon: {
    color: "white",
    right: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    marginLeft: 5,
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default styles;
