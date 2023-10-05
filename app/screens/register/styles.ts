import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 541;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: '100%',
  },
  container: {
    flex: 1,
    marginBottom: 100,
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textTitle: {
    margin: 40,
    fontSize: 60,
    color: '#fff',
    fontFamily: 'Barlow-Bold',
  },
  text: {
    margin: 10,
    fontSize: 40,
    color: '#fff',
    fontFamily: 'Barlow-SemiBold',
  },
  backgroundImage: {
    width: win.width,
    height: 1150 * ratio,
    position: 'absolute',
    tintColor: '#445AA7',
  },
  userImage: {
    width: 150,
    height: 150,
    tintColor: '#fff',
  },
});

export default styles;
