import ImagePickerForm from "@/src/components/forms/ImagePicker";
import TextInputForms from "@/src/components/forms/TextInput";
import { HomeGrid } from "@/src/constants/LayoutGrid";
import { Texts } from "@/src/constants/Texts";
import { useState } from "react";
import { View, Text } from "react-native";

export default function AddPlant() {
    const [name, setName] = useState<string>("");

    return (
        <View style={HomeGrid.container}>
            <Text style={Texts.h1}>Add plant</Text>
            <View style={{ gap: 20 }}>
                <ImagePickerForm />
                <TextInputForms
                    title={"Name"}
                    value={name}
                    placeholder={"testee"}
                    onChangeText={setName}
                    isSecure={false}
                />
            </View>
        </View>
    );
}
