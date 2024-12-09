import ConfirmButton from "@/src/components/forms/ConfirmButton";
import TextInputForms from "@/src/components/forms/TextInput";
import { HomeGrid } from "@/src/constants/LayoutGrid";
import { Texts } from "@/src/constants/Texts";
import { View, Text } from "react-native";

export default function WaterPlant() {
    return (
        <View style={HomeGrid.container}>
            <Text style={Texts.h1}>Water plant</Text>
            <TextInputForms
                title={"Plant"}
                value={""}
                placeholder={""}
                onChangeText={function (text: string): void {
                    throw new Error("Function not implemented.");
                }}
                isSecure={false}
            />
            <View style={{ height: 50 }} />
            <ConfirmButton
                text={"Water plant"}
                onPress={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        </View>
    );
}
