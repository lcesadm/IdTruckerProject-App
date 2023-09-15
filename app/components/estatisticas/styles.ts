import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pmodalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pmodalContent: {
      backgroundColor: '#533BBF',
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
        top: -15,
    },
    text:{
        fontSize: 30,
        color: "#fff",
        fontFamily: "Barlow-Bold",
    },
    km:{
        marginTop: 30,
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
        fontSize: 24,
        fontFamily: "Barlow-Bold",
        marginLeft: 10,
        color: '#533BBF'
      },
      seta:{
        width: 30,
        height: 30,
        marginLeft: 35,
        marginTop: -28
      }
      
  });
  export default styles;