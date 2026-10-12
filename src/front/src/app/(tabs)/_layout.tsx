import { Tabs } from "expo-router";
import { Apple } from "@/components/icons/Apple";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "quote",
					tabBarIcon: ({ size }) => <Apple size={size} />,
				}}
			/>
		</Tabs>
	);
}
