import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar, View } from "react-native";
import BottomBar from "../components/BottomBar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "Archivo-Bold": require("@/assets/fonts/Archivo-Bold.ttf"),
        "Archivo-BoldItalic": require("@/assets/fonts/Archivo-BoldItalic.ttf"),
        "Archivo-Italic": require("@/assets/fonts/Archivo-Italic.ttf"),
        "Archivo-Medium": require("@/assets/fonts/Archivo-Medium.ttf"),
        "Archivo-MediumItalic": require("@/assets/fonts/Archivo-MediumItalic.ttf"),
        "Archivo-Regular": require("@/assets/fonts/Archivo-Regular.ttf"),
        "Archivo-SemiBold": require("@/assets/fonts/Archivo-SemiBold.ttf"),
        "Archivo-SemiBoldItalic": require("@/assets/fonts/Archivo-SemiBoldItalic.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <Stack
                screenOptions={{
                    contentStyle: { backgroundColor: "#1A281F" },
                    headerShown: false,
                }}
            >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
