import { Text, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function BottomBar() {
    return (
        <View
            style={{
                width: "100%",
                height: 50,
                backgroundColor: Colors.caper,
                position: "absolute",
                bottom: 0,
                borderRadius: 100,
                marginBottom: 40,
            }}
        >
            <View></View>
        </View>
    );
}
