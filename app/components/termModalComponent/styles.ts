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
  header: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#1F73B3',
  },
  textHeader: {
    margin: 10,
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Barlow-SemiBold',
  },
  textContent: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    color: '#000',
    textAlign: 'justify',
    fontFamily: 'Barlow-SemiBold',
  },
  containerContent: {
    marginBottom: 30,
    alignItems: 'center',
    alignContent: 'space-between',
  },
  containerBtn: {
    marginBottom: 20,
  },
});
export default styles;
