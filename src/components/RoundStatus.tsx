import { View, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Colors } from "../constants/Colors";
import { Texts } from "../constants/Texts";

export default function RoundStatus() {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <CircularProgress
                value={58}
                radius={27}
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                activeStrokeColor={Colors.ocean}
                inActiveStrokeColor={"#F9F3CC"}
                valueSuffix={"%"}
            />
            <Text style={[Texts.h2, { color: "white" }]}>
                Water for the week
            </Text>
        </View>
    );
}
