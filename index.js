import { AppRegistry } from "react-native";
import Routes from "./app/routes";
import { name as appName } from "./package.json";

AppRegistry.registerComponent(appName, () => Routes);
