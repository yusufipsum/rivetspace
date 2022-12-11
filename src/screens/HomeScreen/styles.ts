import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    lightColor: "#fff",
    darkColor: "rgba(255,255,255,0.1)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    /*borderColor: "rgba(158, 150, 150, .2)",
    borderBottomWidth: 1,*/
  },
  title: {
    fontFamily: "Baskerville-Bold",
    fontWeight: "bold",
    fontSize: 28,
    color: "black",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 5,
  },
});

export default styles;
