import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  user: {
    gap: -3,
    flexDirection: "column",
  },

  name: {
    marginRight: 5,
    fontWeight: "bold",
    minWidth: "100%",
  },

  username: {
    marginRight: 5,
    color: "grey",
    minWidth: "100%",
  },

  createdAt: {
    marginRight: 5,
    color: "grey",
  },

  content: {
    marginTop: 5,
    lineHeight: 18,
  },

  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderWidth: 0.2,
    borderColor: "lightgrey",
    borderRadius: 15,
    overflow: "hidden",
  },

  modal: {
    margin: 0,
  },

  menu: {
    position: 'absolute',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: "flex-end"
  },
  
  modalText: {
    fontSize: 18,
    paddingVertical: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: "white",
  },

  modalTextDisabled: {
    fontSize: 18,
    color: "grey",
    paddingVertical: 5,
  },
});

export default styles;
