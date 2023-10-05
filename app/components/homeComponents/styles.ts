import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  registrarContainer: {
    marginTop: 30,
    width: 383,
    height: 280,
    left: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#2FB5B5',
    borderRadius: 20,
  },
  travelContainer: {
    alignItems: 'center',
  },
  registrarButton: {
    marginBottom: 30,
    backgroundColor: '#ffff',
    width: 100,
    height: 30,
    borderRadius: 5,
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Barlow-Bold',
    color: '#2FB5B5',
  },
  registrarImage: {
    top: -20,
    width: 210,
    height: 210,
    left: 23,
  },
  progressBar: {
    unfilledColor: '#45f59a',
    borderColor: '#ffff',
    borderWidth: 3,
    top: -38,
    left: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Barlow-Bold',
    color: '#fff',
    marginBottom: 15,
  },
  text: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
