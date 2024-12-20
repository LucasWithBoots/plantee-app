import { useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text } from "react-native";
import { Colors } from "@/src/constants/Colors";

export default function ImagePickerForm({
    onImageSelect,
}: {
    onImageSelect: (imageUri: string) => void;
}) {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images", "videos"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImage(uri);
            onImageSelect(uri);
        }
    };

    return (
        <View>
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{
                        width: "100%",
                        height: 150,
                        borderRadius: 10,
                        marginBottom: 15,
                    }}
                />
            )}

            <TouchableOpacity
                style={{
                    backgroundColor: Colors.caper,
                    height: 30,
                    justifyContent: "center",
                    borderRadius: 100,
                    paddingLeft: 10,
                    width: 190,
                }}
                onPress={pickImage}
            >
                <Text style={{ fontFamily: "Archivo-SemiBold" }}>
                    Select image from gallery
                </Text>
            </TouchableOpacity>
        </View>
    );
}
