import RoundStatus from "@/src/components/RoundStatus";
import { HomeGrid, PlantFullScreenGrid } from "@/src/constants/LayoutGrid";
import { Texts } from "@/src/constants/Texts";
import { Image, Text, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function PlantFullScreen() {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("@/assets/images/plant.png")}
            />
            <View style={PlantFullScreenGrid.container}>
                <Text style={[Texts.h1, { marginBottom: 6 }]}>Plant</Text>
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
                    <Text style={styles.location}>Bedroom</Text>
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
