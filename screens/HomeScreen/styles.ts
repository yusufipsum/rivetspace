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
  },
  title: {
    fontFamily: "Baskerville-BoldItalic",
    fontWeight: "bold",
    fontSize: 26,
    color: "#26a9e1",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
