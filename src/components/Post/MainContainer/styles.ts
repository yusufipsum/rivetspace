import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },

  content: {
    marginTop: 5,
    lineHeight: 18,
  },

  image: {
    marginHorizontal: -25.7,
    marginVertical: 10,
    width: windowWidth,
    position: "relative",
    left: 0,
    height: 220,
    resizeMode: "cover",
    borderWidth: 0.2,
    borderColor: "lightgrey",
    //borderRadius: 15,
    overflow: "hidden",
  },
});

export default styles;
