import { Text, View } from "react-native";
import { HomeGrid } from "../constants/LayoutGrid";
import { Texts } from "../constants/Texts";
import PlantCard from "../components/PlantCard";

export default function Index() {
    return (
        <View style={HomeGrid.container}>
            <Text style={Texts.h1}>Your plants</Text>
            <PlantCard />
        </View>
    );
}
