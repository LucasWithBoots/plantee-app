import * as SecureStore from "expo-secure-store";
import { Plant } from "@/src/types/Plant";

export const removePlantById = async (id: string) => {
    const storedPlants = await SecureStore.getItemAsync("plants");

    if (!storedPlants) {
        return null;
    }

    const plants: Plant[] = JSON.parse(storedPlants);

    const numericId = typeof id === "string" ? parseInt(id, 10) : id;

    const updatedPlants = plants.filter((p) => p.id !== numericId);

    await SecureStore.setItemAsync("plants", JSON.stringify(updatedPlants));

    return updatedPlants;
};
