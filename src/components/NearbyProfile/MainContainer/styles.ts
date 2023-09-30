import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 15,
  },

  profilesHeaderContainer: {
    alignSelf: "center",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },

  profilesHeaderNames: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
  },

  name: {
    marginRight: 5,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },

  username: {
    marginRight: 5,
    color: "grey",
    width: "100%",
    textAlign: "center",
  },

  content: {
    lineHeight: 18,
    width: "100%",
  },

  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default styles;
