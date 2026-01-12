import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
    return (
        <SafeAreaView>
            <Text>About Page</Text>

            <Link href={"/about"}>Go to About Page</Link>
        </SafeAreaView>
    );
}