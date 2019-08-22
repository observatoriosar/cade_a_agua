import React, {Component} from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Appbar, Colors, FAB } from 'react-native-paper';

export default class BottomFabBar extends Component {  
    
    render() {    
        return (
            <View style={styles.container}>
                <View style={styles.appbar}>
                    <Appbar style={styles.piece}>
                        <Appbar.Action
                            icon="menu"
                            onPress={() => console.log('Menu pressed')}
                        />
                        </Appbar>
                        <View>
                            <Image
                                source={require('../../assets/imgs/cutout.png')}
                                style={styles.cutout}
                                pointerEvents="none"
                            />
                            <FAB icon="add" onPress={() => console.log('Add pressed')} style={styles.fab} />
                        </View>
                        <Appbar style={[styles.piece, styles.right]}>
                        <Appbar.Action
                            icon="favorite"
                            onPress={() => console.log('Favorite pressed')}
                        />
                        <Appbar.Action
                            icon="search"
                            onPress={() => console.log('Search pressed')}
                        />
                    </Appbar>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    appbar: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 56,
      flexDirection: 'row',
    },
    piece: {
      flex: 1,
      backgroundColor: Colors.pink500,
    },
    right: {
      justifyContent: 'flex-end',
    },
    cutout: {
      height: 56,
      width: 80,
      tintColor: Colors.pink500,
      elevation: 4,
    },
    fab: {
      position: 'absolute',
      margin: 12,
      bottom: 20
    }
  });