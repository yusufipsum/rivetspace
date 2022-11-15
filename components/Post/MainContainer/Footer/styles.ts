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
  },

  downIcon: {
    right: 60,
    flexDirection: "row",
    alignItems: "center",
  },

  commentIcon: {
    color: "white",
    right: 50,
    flexDirection: "row",
    alignItems: "center",
  },

  info: {
    marginTop: 5,
    marginLeft: 5,
    color: "grey",
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default styles;
