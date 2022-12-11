import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    height: 100,
  },
  topFlatList: {
    flexDirection: "row",
    alignSelf: "center",
  },
  stories: {
    alignItems: "center",
    marginLeft: 7.5,
    marginRight: 7.5,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "black",
    justifyContent: "center",
  },
  nameText: {
    alignSelf: "center",
    marginLeft: 7.5,
    marginRight: 7.5,
    marginTop: 3,
    fontSize: 12,
  },
});

export default styles;
