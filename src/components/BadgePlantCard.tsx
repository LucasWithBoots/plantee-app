import { View, Image, Text } from "react-native";
import { Colors } from "../constants/Colors";

export default function BadgePlantCard() {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.willow,
                borderRadius: 100,
                paddingHorizontal: 10,
                paddingVertical: 5,
            }}
        >
            <Image
                source={require("@/assets/images/icons/waterdrop.png")}
                style={{
                    width: 20,
                    aspectRatio: 1,
                    marginRight: 5,
                }}
            />
            <Text style={{ color: "white" }}>In 12 days</Text>
        </View>
    );
}
