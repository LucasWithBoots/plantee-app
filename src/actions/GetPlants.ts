import * as SecureStore from "expo-secure-store";
import { Plant } from "@/src/types/Plant";

export const getPlants = async () => {
    return await SecureStore.getItemAsync("plants");
};
