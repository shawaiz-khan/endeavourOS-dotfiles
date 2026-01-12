import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
    return (
        <SafeAreaView className="flex-1 bg-neutral-50">
            <View className="flex-1 justify-center px-8">
                <View className="items-center">
                    <Text className="text-sm uppercase tracking-widest font-medium text-neutral-500 mb-2">
                        Welcome to
                    </Text>

                    <Text className="text-6xl uppercase font-black text-neutral-900 tracking-tight mb-3">
                        After Me
                    </Text>

                    <Text className="text-base font-medium text-neutral-600 text-center leading-relaxed">
                        Your private, offline diary
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Index;