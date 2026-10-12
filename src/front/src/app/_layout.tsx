import { animations } from "@tamagui/config/animations-reanimated";
import { defaultConfig } from "@tamagui/config/v6";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createTamagui, TamaguiProvider, YStack } from "tamagui";

const config = createTamagui({ ...defaultConfig, animations });

export default function RootLayout() {
	return (
		<TamaguiProvider config={config} defaultTheme="light">
			<GestureHandlerRootView>
				<YStack flex={1}>
					<Stack screenOptions={{ headerShown: false }} />
				</YStack>
			</GestureHandlerRootView>
		</TamaguiProvider>
	);
}
