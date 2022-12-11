import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  profilesHeaderContainer: {
    alignSelf: "flex-start",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },

  profilesHeaderNames: {
    flexDirection: "row",
    justifyContent: "center",
  },

  name: {
    marginRight: 5,
    fontWeight: "bold",
  },

  username: {
    marginRight: 5,
    color: "grey",
  },

  content: {
    marginTop: 5,
    lineHeight: 18,
  },

  icon: {
    paddingHorizontal: 10,
  },
});

export default styles;
