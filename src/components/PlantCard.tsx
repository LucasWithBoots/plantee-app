import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { Texts } from "../constants/Texts";
import BadgePlantCard from "./BadgePlantCard";
import { Link } from "expo-router";
import { Plant, PlantNoID } from "@/src/types/Plant";

export default function PlantCard({ id, name, location, water, image }: Plant) {
    return (
        <Link
            asChild
            href={{
                pathname: "/plant-full-screen",
                params: {
                    id: id,
                },
            }}
        >
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image} source={{ uri: image }} />
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 15,
                    }}
                >
                    <View>
                        <Text style={Texts.h2}>{name}</Text>
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
                            <Text style={styles.location}>{location}</Text>
                        </View>
                    </View>
                    <BadgePlantCard />
                </View>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.periglacial,
        height: 160,
        borderRadius: 7,
        flexDirection: "row",
    },
    image: {
        height: 160,
        width: 140,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
    },
    location: {
        fontFamily: "Archivo-SemiBold",
        fontSize: 20,
        color: Colors.willow,
    },
});
