/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import LoginPage from './src/pages/LoginPage/LoginPage';
import MapPage from './src/pages/MapPage/MapPage';
// import RootNavigator from './src/pages/RootNavigator/RootNavigator';
// import SideBar from './src/pages/SideBar/SideBar';
// import BottomBar from './src/pages/BottomBar/BottomBar';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MapPage);
