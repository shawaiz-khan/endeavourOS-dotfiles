import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/about"}>Go to About Page</Link>
      <Link href={"/test"}>Go to Test Page</Link>
    </SafeAreaView>
  );
}