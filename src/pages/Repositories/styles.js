import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingBottom: 10,
    
  },

  boxRepository: {
    width: "100%",
    paddingVertical: 39,
    backgroundColor: "#292929",
    borderBottomColor: "#7070705A",
    borderWidth: 0.5,

    
  },

  boxTitle: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  textTitle: {
    fontSize: 20,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 18,
  },

  textDescription: {
    fontSize: 15,
    color: "#fff",
    marginLeft: 28,
  },

  detailYellowLeft: {
    width: 50,
    height: 50,
    backgroundColor: "#fc0",
    borderRadius: 10,
    marginLeft: -40,
  },

  boxFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    
  },

  boxFooterLeft: {
    flexDirection: "row",
  },

  boxFooterHight: {
    flexDirection: "row",
  },

  footerText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 6,
  },

  listStyle: {
    paddingBottom: 85,
  },

});

export default styles;
