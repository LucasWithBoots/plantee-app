import ImagePickerForm from "@/src/components/forms/ImagePicker";
import TextInputForms from "@/src/components/forms/TextInput";
import { HomeGrid } from "@/src/constants/LayoutGrid";
import { Texts } from "@/src/constants/Texts";
import { View, Text } from "react-native";

export default function AddPlant() {
    return (
        <View style={HomeGrid.container}>
            <Text style={Texts.h1}>Add plant</Text>
            <View style={{ gap: 20 }}>
                <ImagePickerForm />
                <TextInputForms
                    title={"Teste"}
                    value={""}
                    placeholder={"testee"}
                    onChangeText={function (text: string): void {
                        throw new Error("Function not implemented.");
                    }}
                    isSecure={false}
                />
            </View>
        </View>
    );
}
