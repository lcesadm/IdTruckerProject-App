import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  containerField: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Barlow-SemiBold',
  },
  input: {
    width: 300,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontFamily: 'Barlow-SemiBold',
  },
  invalid: {
    fontSize: 20,
    color: '#f00',
    fontFamily: 'Barlow-SemiBold',
  },
  imageBtn: {
    left: 265,
    bottom: 10,
    position: 'absolute',
  },
  image: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },
  labelPressed: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Barlow-SemiBold',
    textDecorationLine: 'underline',
  },
});

export default styles;
