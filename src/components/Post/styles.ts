import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    padding: 5,
    borderTopWidth: 0.3,
    backgroundColor: "#f7f7f7",
    borderColor: "lightgrey",
    gap: 5,
  },

  posts: {
    padding: 10,
    backgroundColor: "#fff", 
    borderColor: "lightgrey", 
    borderRadius: 10, 
    borderWidth: .3
  },

  // posts: {
  //   backgroundColor: "white",
  //   shadowOffset: { width: 0, height: -6 },
  //   shadowColor: "#171717",
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  //   borderRadius: 20,
  //   margin: 5,
  // },
});

export default styles;
