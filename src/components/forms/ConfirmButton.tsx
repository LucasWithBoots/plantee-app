import { Text, TouchableOpacity } from "react-native";
import { Colors } from "@/src/constants/Colors";

export default function ConfirmButton({
    text,
    onPress,
}: {
    text: string;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.willow,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 10,
                borderRadius: 10,
                marginHorizontal: 30,
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    fontFamily: "Archivo-Bold",
                    color: "white",
                    fontSize: 20,
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}
