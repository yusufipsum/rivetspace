import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  profilesHeaderContainer: {
    alignSelf: "flex-start",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },

  profilesHeaderNames: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%"
  },

  name: {
    marginRight: 5,
    fontWeight: "bold",
    width: "100%",
  },

  username: {
    marginRight: 5,
    color: "grey",
    width: 120,
    position: "absolute",
    textAlign: "right",
    right: 0,
  },

  content: {
    marginTop: 5,
    lineHeight: 18,
  },
  icon: {
    padding: 5.5,
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
