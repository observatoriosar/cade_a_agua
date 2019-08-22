import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, TextInput, Text } from "react-native-paper";
import { SafeAreaView, View, Image } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import { translate } from '../../configurations/locales';
import { IconButton, Colors } from 'react-native-paper';
import { TabBarIcon } from '../../utilities';
import Styles from "./Style";

class LoginPage extends Component {

    // didFocusSubscription;
    // willBlurSubscription;

    static navigationOptions = {
        tabBarColor: Colors.black,
        tabBarIcon: TabBarIcon('person')({tintColor: Colors.white})
    };

    constructor(props) {
        super(props);

        this.state = {
            registry: "",
            password: "",
        };

        // this.didFocusSubscription = props.navigation.addListener("didFocus", () => {
        //     BackHandler.addEventListener("hardwareBackPress", this.onBackPressed);
        // });
    }

    componentDidMount() {
        // this.willBlurSubscription = this.props.navigation.addListener("willBlur", () => {
        //     BackHandler.removeEventListener("hardwareBackPress", this.onBackPressed)
        // });
    }

    componentWillUnmount() {
        // this.willBlurSubscription && this.willBlurSubscription.remove();
        // this.didFocusSubscription && this.didFocusSubscription.remove();
    }

    renderAccessButton = () => {

        const { loading } = this.props;

        return (
            <Button
                mode="contained"
                loading={loading}
                disabled={loading}
                style={Styles.buttonSignIn}
                onPress={() => this.authenticateUser()}
            >
                <Text style={Styles.textSignIn}>{translate('LOGIN_entrar')}</Text>
            </Button>
        );
    };

    authenticateUser = () => {
        const { registry, password } = this.state;

        if (registry === "admin" && password === "osar123") {
            alert(translate('LOGIN_sucessoLogin'));
            this.props.navigation.navigate('mapPage');
        } else {
            alert(translate('LOGIN_falhaLogin'));
        }
    };

    // onBackPressed = () => {
    //     BackHandler.exitApp();
    //     return true;
    // };

    render() {

        const { loading } = this.props;

        return (

            <SafeAreaView id="login" style={{ flex: 1 }}>

                <KeyboardAwareScrollView enableOnAndroid={true}>

                    <Grid>

                        <Row>

                            <Col style={Styles.viewImage}>
                                <Image
                                    resizeMode={"stretch"}
                                    style={Styles.logo}
                                    source={require("../../assets/imgs/osar.png")} />
                            </Col>
                        </Row>
                        <Row style={Styles.container}>
                            <Col >

                                <TextInput
                                    label="Login"
                                    mode="outlined"
                                    disabled={loading}
                                    value={this.state.registry}
                                    onChangeText={(registry) => this.setState({ registry })}
                                />

                                <TextInput
                                    label={translate('LOGIN_senha')}
                                    mode="outlined"
                                    disabled={loading}
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({ password })}
                                    secureTextEntry={true}
                                />

                                <View style={{ marginTop: 5 }}>
                                    {this.renderAccessButton()}
                                </View>
                            </Col>
                        </Row>
                    </Grid>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }

}

export default LoginPage;