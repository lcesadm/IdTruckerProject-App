import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 541;

const styles = StyleSheet.create({
  statusContainer: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#033C91',
    opacity: 0.81,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    marginVertical: 30,
    marginRight: 20,
    width: 100,
    height: 100,
  },
  content: {
    marginBottom: 10,
  },
  backgroundImage: {
    width: 1150 * ratio,
    height: '100%',
    position: 'absolute',
    tintColor: '#37BCC5',
    opacity: 0.32,
  },
  title: {
    fontSize: 30,
    color: '#faffff',
    fontFamily: 'Barlow-Bold',
  },
  titleCompany: {
    fontSize: 30,
    marginVertical: 40,
    color: '#faffff',
    fontFamily: 'Barlow-Bold',
  },
  progressBar: {
    unfilledColor: '#45f59a',
    borderColor: '#0bb538',
    borderWidth: 3.7,
    backgroundColor: '#faffff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  level: {
    fontSize: 20,
    color: '#faffff',
    fontFamily: 'Barlow-Bold',
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
