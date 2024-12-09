import * as SecureStore from "expo-secure-store";

export const getPlants = async () => {
    const plants = await SecureStore.getItemAsync("plants");
    return plants;
};
