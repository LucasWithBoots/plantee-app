import { FlatList, Text, View } from "react-native";
import { HomeGrid } from "../constants/LayoutGrid";
import { Texts } from "../constants/Texts";
import PlantCard from "../components/PlantCard";
import { useEffect, useState } from "react";
import { getPlants } from "@/src/actions/GetPlants";
import { Plant } from "@/src/types/Plant";

export default function Index() {
    const [plants, setPlants] = useState<Plant[]>();

    useEffect(() => {
        const loadPlants = async () => {
            const storedPlants = await getPlants();
            const parsedPlants: Plant[] = storedPlants
                ? JSON.parse(storedPlants)
                : [];
            setPlants(parsedPlants);
        };

        loadPlants();
    }, []);

    return (
        <View style={HomeGrid.container}>
            <Text style={Texts.h1}>Your plants</Text>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={plants}
                renderItem={({ item }) => (
                    <PlantCard
                        id={item.id}
                        name={item.name}
                        location={item.location}
                        water={""}
                        image={item.image}
                    />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>
    );
}
