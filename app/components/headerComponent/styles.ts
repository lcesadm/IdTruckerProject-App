import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1a5aba",
    borderRadius: 10,
  },
  title: {
    margin: 50,
    top: -11,
    left: 128,
    fontSize: 30,
    color: "#faffff",
    fontFamily: "Barlow-Bold"
  },
  progressBar: {
    unfilledColor: "#45f59a",
    borderColor: "#0bb538",
    borderWidth: 3.7,
    backgroundColor: "#faffff",
    top: 25,
    left: -123,
    borderRadius: 10,
    overflow: 'hidden',

  },
});

export default styles;
