import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Colors } from "../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useSegments } from "expo-router";
import { useEffect, useState } from "react";

export default function BottomBar() {
    const [activePage, setActivePage] = useState("home");
    const segment = useSegments();

    const navigateTo = (page: string) => {
        setActivePage(page);

        if (page === "home") {
            router.push("./");
        } else if (page === "leaf") {
            router.push("./add-plant");
        } else if (page === "water") {
            router.push("./");
        }
    };

    useEffect(() => {
        if (segment[0] === "add-plant") {
            setActivePage("leaf");
        } else {
            setActivePage("home");
        }
    }, [segment]);

    return (
        <View
            style={{
                flexDirection: "row",
                width: "50%",
                height: 50,
                backgroundColor: "#799C60",
                position: "absolute",
                bottom: 0,
                borderRadius: 100,
                marginBottom: 40,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-around",
                overflow: "hidden",
            }}
        >
            <TouchableOpacity
                onPress={() => navigateTo("home")}
                style={styles.icon}
            >
                <FontAwesome
                    size={28}
                    name="home"
                    color={
                        activePage === "home" ? Colors.dark_green : Colors.skin
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigateTo("leaf")}
                style={styles.icon}
            >
                {activePage === "leaf" ? (
                    <Image
                        source={require("@/assets/images/icons/leaf_notselected.png")}
                        style={{ width: 28, height: 28 }}
                    />
                ) : (
                    <Image
                        source={require("@/assets/images/icons/leaf_selected.png")}
                        style={{ width: 28, height: 28 }}
                    />
                )}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigateTo("water")}
                style={styles.icon}
            >
                {activePage === "water" ? (
                    <Image
                        source={require("@/assets/images/icons/water_notselected.png")}
                        style={{ width: 28, height: 28 }}
                    />
                ) : (
                    <Image
                        source={require("@/assets/images/icons/water_selected.png")}
                        style={{ width: 28, height: 28 }}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        height: "100%",
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
    },
});
