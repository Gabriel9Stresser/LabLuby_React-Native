import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingBottom: 10,
  },
  boxListUsers: {
    width: "100%",
    paddingVertical: 18,
    backgroundColor: "#333",
    borderBottomColor: "#eee",
    borderWidth: 0.5,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailYellowLeft: {
    width: 50,
    height: 50,
    backgroundColor: "#fc0",
    borderRadius: 10,
    marginLeft: -40,
  },
  boxButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  boxButtonLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  slug: {
    color: "#fff",
    marginLeft: 30,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  listStyle: {
    paddingBottom: 85,
  },
});

export default styles;
