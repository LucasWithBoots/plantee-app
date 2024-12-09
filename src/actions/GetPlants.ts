import * as SecureStore from "expo-secure-store";
import { Plant } from "@/src/types/Plant";

export const getPlants = async () => {
    const plants = await SecureStore.getItemAsync("plants");
    return plants;
};
