import { Plant, PlantNoID } from "@/src/types/Plant";
import * as SecureStore from "expo-secure-store";

export const addPlant = async ({ name, location, water, image }: PlantNoID) => {
    const newPlant: Plant = {
        id: Date.now(),
        name,
        location,
        water,
        image,
    };

    const storedPlants = await SecureStore.getItemAsync("plants");
    const plants = storedPlants ? JSON.parse(storedPlants) : [];

    plants.push(newPlant);

    await SecureStore.setItemAsync("plants", JSON.stringify(plants));

    console.log(await SecureStore.getItemAsync("plants"));
};
