import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Test() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle={"default"} />
            <Text>Test Page</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20
    }
});