import * as SecureStore from "expo-secure-store";
import { Plant } from "@/src/types/Plant";

export const getPlantById = async (id: string) => {
    const storedPlants = await SecureStore.getItemAsync("plants");

    if (!storedPlants) {
        return null;
    }

    const plants: Plant[] = JSON.parse(storedPlants);

    const numericId = typeof id === "string" ? parseInt(id, 10) : id;
    const plant = plants.find((p) => p.id === numericId);

    return plant || null;
};
