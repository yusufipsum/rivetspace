import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    padding: 15,
    borderWidth: 0.3,
    borderColor: "lightgrey",
    alignItems: "center",
    gap: 5,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
  },
  cards: {
    flex: 1,
    margin: 10,
  },
});

export default styles;
