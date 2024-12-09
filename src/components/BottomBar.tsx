import { StyleSheet, TouchableOpacity, View } from "react-native";
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
        } else if (page === "plus") {
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
                        activePage === "home" ? Colors.ocean_blue : Colors.skin
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigateTo("leaf")}
                style={styles.icon}
            >
                <FontAwesome
                    size={28}
                    name="leaf"
                    color={
                        activePage === "leaf" ? Colors.ocean_blue : Colors.skin
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigateTo("plus")}
                style={styles.icon}
            >
                <FontAwesome
                    size={28}
                    name="plus"
                    color={
                        activePage === "plus" ? Colors.ocean_blue : Colors.skin
                    }
                />
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
