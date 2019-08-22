import React, {Component} from "react";
import { 
    // SafeAreaView 
    View,
    Image,
    StyleSheet
} from "react-native";
import { Appbar, IconButton, Colors, FAB, Card, Title, Paragraph } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { DrawerActions } from "react-navigation";
import { TabBarIcon } from '../../utilities';
import { Grid, Col, Row } from "react-native-easy-grid";
// import Styles from "./Style";

export default class App extends Component {  

    static navigationOptions = {
        tabBarColor: '#38b3d6',
        tabBarIcon: TabBarIcon('map')({tintColor: Colors.white})
    };
    
    render() {    
        
        return (    

            <View id="amap" style={styles.container}>
                <MapView 
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}   
                    region={{          
                        latitude: -8.0807446,          
                        longitude: -34.9202831,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,     
                    }}        
                    showsUserLocation={true}   
                />

                <View style={{position: 'absolute', top: 0, width: '100%', padding: 5 }}>
                    <Card style={{backgroundColor: Colors.white, elevation: 3}}>
                        <Card.Content>
                            <Grid>
                                <Col size={35}>
                                    <Image
                                        source={require('../../assets/imgs/osar.png')}
                                        style={{height: 70, width: 80}}
                                        pointerEvents="none"
                                    />
                                </Col>
                                <Col size={55}>
                                    <Row>
                                        <Title>Observação!</Title>
                                    </Row>
                                    <Row>
                                        <Paragraph>Um resumo da descrição desta observação...</Paragraph>
                                    </Row>
                                </Col>
                                <Col size={10} style={{justifyContent: "flex-start"}}>
                                    <IconButton
                                        icon="close"
                                        style={{top: 0}}
                                        color={Colors.black}
                                        size={25}
                                        onPress={() => console.log('Pressed')}
                                    />
                                </Col>
                            </Grid>
                        </Card.Content>
                    </Card>
                </View>

                <View>
                    {/* <Appbar.Header
                        style={{backgroundColor: 'transparent'}}
                    >
                        <Appbar.Action
                            icon="menu"
                            onPress={() =>
                                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                            }
                        />
                    </Appbar.Header> */}

                    <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: Colors.cyan500,  width: 67, height: 67, borderRadius: 35, bottom: 25, zIndex: 10, justifyContent: 'center', alignItems: "center" }}>
                        <IconButton
                            icon="add"
                            style={{alignSelf: 'center', width: 67, height: 67}}
                            color={Colors.white}
                            size={30}
                            onPress={() => console.log('Pressed')}
                        />
                        {/* <FAB
                            style={styles.fab}
                            icon="add"
                            onPress={() => console.log('Pressed')}
                        /> */}
                    </View>
                    <View style={{ position: 'absolute', backgroundColor: '#2196F3', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <IconButton
                                icon="place"
                                style={{alignSelf: 'center', marginHorizontal: 16}}
                                color={Colors.white}
                                size={28}
                                onPress={() => console.log('Pressed')}
                            />

                            <IconButton
                                icon="list"
                                style={{alignSelf: 'center', marginHorizontal: 16}}
                                color={Colors.white}
                                size={28}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <IconButton
                                icon="grade"
                                style={{alignSelf: 'center', marginHorizontal: 16}}
                                color={Colors.white}
                                size={28}
                                onPress={() => console.log('Pressed')}
                            />

                            <IconButton
                                icon="person"
                                style={{alignSelf: 'center', marginHorizontal: 16}}
                                color={Colors.white}
                                size={28}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>
                    </View>
                </View>
            </View>




            // <View style={{flex: 1}} >

            //     <Appbar.Header
            //         style={{backgroundColor: 'transparent'}}
            //     >
            //         <Appbar.Action
            //             icon="menu"
            //             onPress={() =>
            //                 this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            //             }
            //         />
            //     </Appbar.Header>

            //     <View
            //         style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            //     >
            //         <MapView
            //             provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            //             style={styles.map}   
            //             region={{          
            //                 latitude: -8.0807446,          
            //                 longitude: -34.9202831,
            //                 latitudeDelta: 0.0922,
            //                 longitudeDelta: 0.0421,     
            //             }}        
            //             showsUserLocation={true}      
            //         />
            //     </View>

            // </View> 
        );  
    }
}

// const styles = StyleSheet.create({
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
// });

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        flex: 1,
    },
    inputView: {
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute', 
        bottom: 0,
        left: 5,
        right: 5
    },

    piece: {
        flex: 1,
        backgroundColor: Colors.pink500,
    },
    right: {
        justifyContent: 'flex-end',
    },
    cutout: {
        height: 57,
        width: 80,
        tintColor: Colors.pink500,
    },
    fab: {
        position: 'absolute',
        margin: 0,
        bottom: 8
    }
})