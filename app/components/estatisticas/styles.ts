import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pmodalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 350,
      height: 600,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    close:{
        width: 35,
        height: 35,
        left: 140,
        top: -12,
    },
    text:{
        fontSize: 35,
        color: "#fff",
        fontFamily: "Barlow-Bold",
        marginTop: 10,
    },
    km:{
        marginTop: 40,
        fontSize: 45,
        color: "#fff",
        fontFamily: "Barlow-Bold",
    },
    whiteLine: {
        backgroundColor: 'white',
        height: 4, 
        width: 300, 
        alignSelf: 'center', 
        marginTop: 40, 
      },
      line:{
        backgroundColor: 'white',
        height: 34, 
        width: 300,
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 20,
      },
      textline:{
        fontSize: 20,
        fontFamily: "Barlow-Bold",
        marginLeft: 10,
      },
      seta:{
        width: 30,
        height: 30,
        marginLeft: 30,
        marginTop: -26
      },
      star:{
        width: 40,
        height: 40
      }
      
  });
  export default styles;