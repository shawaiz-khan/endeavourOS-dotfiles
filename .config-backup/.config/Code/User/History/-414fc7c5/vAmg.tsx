import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function StackLayout() {
    return (
        <Stack>
            <StatusBar barStyle={"dark-content"} />
            <Stack.Screen name="test" options={{ headerShown: false }} />
        </Stack>
    )
}