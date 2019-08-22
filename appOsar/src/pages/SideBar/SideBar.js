// import React, {Component} from "react";
// import { ScrollView } from "react-native";
// import { createAppContainer, createDrawerNavigator, SafeAreaView, DrawerActions } from "react-navigation";
// import { Drawer } from "react-native-paper";

// import MapPage from '../MapPage/MapPage';
// import LoginPage from '../LoginPage/LoginPage';

// const MenuBar = createDrawerNavigator(
//     {
//         loginPage: { screen: LoginPage },
//         mapPage: { screen: MapPage }
//     },
//     {
//         contentComponent: props => (
//             <ScrollView>
//                 <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
//                     <Drawer.Item
//                         label="Página de login"
//                         active="true"
//                         onPress={() => props.navigation.navigate("loginPage")}
//                     />
//                     <Drawer.Item
//                         label="Mapa"
//                         active="true"
//                         onPress={() => props.navigation.navigate("mapPage")}
//                     />
//                 </SafeAreaView>
//             </ScrollView>
//         )
//     }
// );

// const Menu = createAppContainer(MenuBar);

// export default class SideBar extends Component {  
    
//     render() {    
//         return (    
//             <Menu />
//         );  
//     }
// }
