import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function BottomBar() {
    return (
        <View
            style={{
                flexDirection: "row",
                width: "50%",
                height: 50,
                backgroundColor: "#799C60",
                position: "absolute",
                bottom: 0,
                borderRadius: 100,
                marginBottom: 40,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-around",
                overflow: "hidden",
            }}
        >
            <FontAwesome size={28} name="home" color={Colors.ocean_blue} />
            <FontAwesome size={28} name="leaf" color={Colors.skin} />
            <FontAwesome size={28} name="plus" color={Colors.skin} />
        </View>
    );
}
