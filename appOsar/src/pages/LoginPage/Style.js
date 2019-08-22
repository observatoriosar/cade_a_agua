import { StyleSheet } from "react-native";
import { Dimensions } from "../../utilities";

export default StyleSheet.create({
    container: {
        marginTop: 10,
        width: Dimensions.WIDTH / 1.03,
        alignSelf: "center"
    },
    logo: {
        alignSelf: "center",
        width: Dimensions.WIDTH / 1.33,
        height: Dimensions.WIDTH / 1.33,
    },
    viewImage: {
        alignItems: "center",
        marginTop: 50,
        marginBottom: 15
    },
    buttonSignIn: {
        backgroundColor: "#0000FF"
    },
    textSignIn: {
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF"
    }
});
