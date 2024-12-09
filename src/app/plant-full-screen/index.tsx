import { removePlantById } from "@/src/actions/DeletePlant";
import { getPlantById } from "@/src/actions/GetPlantById";
import RoundStatus from "@/src/components/RoundStatus";
import { Colors } from "@/src/constants/Colors";
import { PlantFullScreenGrid } from "@/src/constants/LayoutGrid";
import { Texts } from "@/src/constants/Texts";
import { Plant } from "@/src/types/Plant";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function PlantFullScreen() {
    const { id } = useLocalSearchParams();
    const [plant, setPlant] = useState<Plant>();

    useEffect(() => {
        const getPlant = async () => {
            const plantById = (await getPlantById(id.toString())) as Plant;
            setPlant(plantById);
        };

        getPlant();
    });

    const deleteHandler = async (id: number) => {
        await removePlantById(id.toString());
        router.push({
            pathname: "/",
            params: { reload: "true" },
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.image} source={{ uri: plant?.image }} />
            <View style={[PlantFullScreenGrid.container]}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 1,
                        gap: 20,
                    }}
                >
                    <Text style={[Texts.h1, { marginBottom: 6 }]}>
                        {plant?.name}
                    </Text>
                    <TouchableOpacity
                        onPress={() => deleteHandler(plant?.id!!)}
                    >
                        <FontAwesome
                            size={28}
                            name="trash"
                            color={Colors.skin}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={require("@/assets/images/icons/location.png")}
                        style={{
                            width: 27,
                            aspectRatio: 1,
                            marginRight: 6,
                        }}
                    />
                    <Text style={styles.location}>{plant?.location}</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <RoundStatus />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        borderBottomLeftRadius: 70,
    },
    location: {
        fontFamily: "Archivo-SemiBold",
        fontSize: 20,
        color: "white",
    },
});
