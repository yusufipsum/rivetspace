import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  rightIcons: {
    flex: 2,
    alignItems: "flex-end",
  },
  upIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  downIcon: {
    width: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  commentIcon: {
    color: "white",
    marginHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
