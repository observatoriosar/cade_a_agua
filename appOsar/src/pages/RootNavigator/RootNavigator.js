/* @flow */

import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Appbar } from 'react-native-paper';
import MapPage from '../MapPage/MapPage'


export default createStackNavigator(
    {
        home: { screen: MapPage },
            // ...routes,
        },
    {
        navigationOptions: ({ navigation }) => ({
            header: (
                <Appbar.Header>
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                    <Appbar.Content title="Examples" />
                </Appbar.Header>
            ),
        }),
    }
);
