import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 25,
    borderColor: "black",
    backgroundColor: "#fff",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goBackIcon: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  searchIcon: {
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
});

export default styles;
