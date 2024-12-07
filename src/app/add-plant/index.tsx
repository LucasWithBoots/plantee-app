import ImagePickerForm from "@/src/components/forms/ImagePicker";
import TextInputForms from "@/src/components/forms/TextInput";
import { HomeGrid } from "@/src/constants/LayoutGrid";
import { Texts } from "@/src/constants/Texts";
import { useState } from "react";
import { View, Text } from "react-native";
import ConfirmButton from "@/src/components/forms/ConfirmButton";
import { addPlant } from "@/src/actions/AddPlant";

export default function AddPlant() {
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [water, setWater] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const submitPlant = async () => {
        await addPlant({ name, location, water, image });
    };

    return (
        <View style={HomeGrid.container}>
            <Text style={Texts.h1}>Add plant</Text>
            <View style={{ gap: 20 }}>
                <ImagePickerForm onImageSelect={setImage} />
                <TextInputForms
                    title={"Name"}
                    value={name}
                    placeholder={"Plant's name"}
                    onChangeText={setName}
                    isSecure={false}
                />
                <TextInputForms
                    title={"Location"}
                    value={location}
                    placeholder={"Plant's location"}
                    onChangeText={setLocation}
                    isSecure={false}
                />
                <TextInputForms
                    title={"Water interval (in days)"}
                    value={water}
                    placeholder={""}
                    onChangeText={setWater}
                    isSecure={false}
                    keyboard={"numeric"}
                />
                <View style={{ marginTop: 30 }}>
                    <ConfirmButton text={"Add plant"} onPress={submitPlant} />
                </View>
            </View>
        </View>
    );
}
