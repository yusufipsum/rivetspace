import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.3,
    borderColor: "lightgrey",
    borderRadius: 20,
  },

  friends: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 6 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
  },
});

export default styles;
