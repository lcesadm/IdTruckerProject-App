import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    margin: 20,
    width: 350,
    height: 600,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  textTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 50,
    color: '#000',
    fontFamily: 'Barlow-Bold',
  },
  textContent: {
    marginVertical: 10,
    marginBottom: 30,
    fontSize: 20,
    color: '#000',
  },
  containerTitle: {
    alignItems: 'center',
  },
  containerContent: {
    marginBottom: 50,
    alignItems: 'flex-start',
  },
});
export default styles;
