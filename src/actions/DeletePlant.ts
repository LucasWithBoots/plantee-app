import * as SecureStore from "expo-secure-store";
import { Plant } from "@/src/types/Plant";

export const removePlantById = async (id: string) => {
    const storedPlants = await SecureStore.getItemAsync("plants");

    if (!storedPlants) {
        return null; // Nenhuma planta armazenada
    }

    const plants: Plant[] = JSON.parse(storedPlants);

    const numericId = typeof id === "string" ? parseInt(id, 10) : id;

    // Filtra para manter todas as plantas que não correspondem ao ID
    const updatedPlants = plants.filter((p) => p.id !== numericId);

    // Atualiza o SecureStore com a lista filtrada
    await SecureStore.setItemAsync("plants", JSON.stringify(updatedPlants));

    return updatedPlants; // Retorna a nova lista de plantas
};
