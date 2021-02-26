import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingBottom: 10,
  },

  header: {
    width: "100%",
    height: 126,
    alignItems: "center",
    backgroundColor: "#111",
  },

  headerBar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },

  headerBarTextLeft: {
    color: "#FFFFFF",
    fontSize: 17,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
  },

  headerBarRight: {
    width: 60,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerBarTextRight: {
    color: "#FFFFFF",
    fontSize: 17,
    marginTop: 2,
    fontFamily: "Helvetica Neue",
  },

  avatar: {
    width: 115,
    height: 115,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginTop: 18,
  },

  boxBasicInfo: {
    width: "100%",
    marginTop: 100,
  },

  boxTitle: {
    width: "100%",
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  detailYellowLeft: {
    width: 50,
    height: 50,
    backgroundColor: "#FFCE00",
    borderRadius: 10,
    marginLeft: -40,
  },

  textTitle: {
    fontSize: 26,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 14,
  },

  basicInfoText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Helvetica Neue",
    marginLeft: 24,
  },
  engagement: {
    width: "100%",
    height: 97,
    backgroundColor: "#5252525D",
    marginTop: 50,
    marginBottom: 44,

    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  boxEngagementInfo: {
    height: "100%",
    margin: 10,
    alignItems: "center",
    
  },

  engagementNumber: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  engagementText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    
  },

  boxEngagementInfoFollowers: {
    height: "100%",
    margin: 10,
    marginLeft: -15,
    alignItems: "center",
    
  },

  engagementNumberFollowers: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  engagementTextFollowers: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    
  },

  boxEngagementInfoFollowing: {
    height: "100%",
    margin: 10,
    marginLeft: -5,
    alignItems: "center",
    
  },

  engagementNumberFollowing: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  engagementTextFollowing: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    
  },

  boxEngagementInfoPublic: {
    marginRight: 5,
    height: "100%",
    margin: 10,
    marginRight: 0,
    alignItems: "center",
    
  },

  engagementNumberPublic: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  engagementTextPublic: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    
  },

  boxBio: {
    width: "100%",
  },

  basicInfoTextBio: {
    fontSize: 18,
    color: "#fff",
    textAlign: "left",
    marginTop: 14,
    marginLeft: 25,
    marginRight: 18,
    fontFamily: "Helvetica Neue",
    marginBottom: 73,

  }
});

export default styles;
