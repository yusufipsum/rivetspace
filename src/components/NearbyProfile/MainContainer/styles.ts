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
    lineHeight: 18,
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
