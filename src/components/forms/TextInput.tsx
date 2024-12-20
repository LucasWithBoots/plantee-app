import { Colors } from "@/src/constants/Colors";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface ModelInputText {
    title: string;
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    isSecure: boolean;
    keyboard?: KeyboardTypeOptions;
}

export default function TextInputForms({
    title,
    value,
    placeholder,
    onChangeText,
    isSecure = false,
    keyboard = "default",
}: ModelInputText) {
    return (
        <View className="gap-2.5">
            <Text style={{ fontFamily: "Archivo-Regular", color: "white" }}>
                {title}
            </Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor={"#666666"}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
                style={{
                    fontFamily: "Archivo-Regular",
                    borderRadius: 8,
                    padding: 10,
                    color: "black",
                    backgroundColor: Colors.caper,
                    marginTop: 10,
                }}
                keyboardType={keyboard}
            />
        </View>
    );
}
