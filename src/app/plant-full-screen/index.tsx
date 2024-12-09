import { getPlantById } from "@/src/actions/GetPlantById";
import RoundStatus from "@/src/components/RoundStatus";
import { PlantFullScreenGrid } from "@/src/constants/LayoutGrid";
import { Texts } from "@/src/constants/Texts";
import { Plant } from "@/src/types/Plant";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

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

    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.image} source={{ uri: plant?.image }} />
            <View style={PlantFullScreenGrid.container}>
                <Text style={[Texts.h1, { marginBottom: 6 }]}>
                    {plant?.name}
                </Text>
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
