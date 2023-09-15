import { AppRegistry } from 'react-native';
import StackNavigator from './app/routes/stackNavigator';
import { name as appName } from './package.json';

AppRegistry.registerComponent(appName, () => StackNavigator);
