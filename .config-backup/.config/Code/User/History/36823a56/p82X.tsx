import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Test() {
    return (
        <SafeAreaView style={styles.mainContainer}>
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