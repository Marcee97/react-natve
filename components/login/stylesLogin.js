import { StyleSheet } from "react-native";

export const login = StyleSheet.create({
  icons:{
flexDirection: "row"
  },
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contlogin: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    paddingVertical: 35,
    backgroundColor: "#3a3939f5",
    borderRadius: 15,
    overflow: "hidden",
    gap: 20,
  },
  inputnombre: {
    color: "#ffffffff",
    paddingHorizontal: 29,
    borderRadius: 15,
    fontSize: 25,
    width: "100%",
    backgroundColor:"#131313ff",
    elevation: 6

  },
  touchablebtn: {
    backgroundColor: "#494848ff",
    padding: 7,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6
  },
  touchabletext: {
    fontSize: 25,
    color: "#fff",
  },
  cont_redes:{
color: "red",
flexDirection: "row",
gap: 15
  },
  tenescuenta: {
    fontSize: 15,
    color: "#aaaaaaff",
  },
  
});
