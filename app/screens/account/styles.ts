// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {

//   },
//   header: {
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     backgroundColor: "#1a5aba",
//     borderRadius: 10,
//     height: 140,
//   },
//   sair: {
//     width: 50,
//     height: 50,
//     left: 150,
//     top: 13
//   },
//   user: {
//     marginTop: 23,
//     width: 130,
//     height: 130,
//   },
//   editar: {
//     width: 40,
//     height: 40,
//     left: 350,
//     top: -130
//   },
//   texto: {
//     fontSize: 20,
//     fontFamily: "Barlow-Bold",
//     marginLeft: 17,
    
//   },
//   label: {
//     left: 124,
//     top: -98,
//   }
// });

// export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1a5aba",
    borderRadius: 10,
    height: 140,
  },
  sair: {
    width: 50,
    height: 50,
    left: 150,
    top: 13
  },
  userInfo: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    
  },
  user: {
    width: 130,
    height: 130,
    left: -10,
  },
  editar: {
    width: 40,
    height: 40,
    left: 300,
    top: -130
  },
  labelContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    fontFamily: "Barlow-Bold",
  },
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  nome: {
    left: 134,
    top: -107,
    fontSize: 25,
    fontFamily: "Barlow-Bold",
  },
  espaco: {
    top: -27,
  },
  seta: {
    width: 20,
    height: 20,
    left: 290,
    top: -33
  }
});

export default styles;
