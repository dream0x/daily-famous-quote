import { Carousel } from "react-native-reanimated-carousel";
import { Image, Text, YStack } from "tamagui";

type Quote = {
	text: string;
	author: string;
	image: string;
};

const quotes: Quote[] = [
	{
		text: "ハングリーであれ。愚か者であれ。",
		author: "スティーブ・ジョブズ",
		image: require("@assets/images/view-from-behind.jpg"),
	},
	{
		text: "完璧であることより、まず終わらせることが重要だ",
		author: "マーク・ザッカーバーグ",
		image: require("@assets/images/the-thinking-statue.jpg"),
	},
	{
		text: "なんだって可能だ",
		author: "ケビン・ガーネット",
		image: require("@assets/images/dunk.jpg"),
	},
	{
		text: "求めよ、そうすれば与えられる。探しなさい、そうすれば見つかる。門をたたきなさい、そうすれば開かれる",
		author: "マタイによる福音書 7:7",
		image: require("@assets/images/church.jpg"),
	},
];

export default function Home() {
	return (
		<Carousel
			style={{ flex: 1 }}
			data={quotes}
			orientation="vertical"
			loop
			renderItem={({ item }) => (
				<YStack position={"relative"} flex={1}>
					<Image flex={1} src={item.image} objectFit="cover" />
					<YStack
						position={"absolute"}
						top={0}
						right={0}
						bottom={0}
						left={0}
						alignItems="center"
						justifyContent="center"
						padding="$6"
					>
						<Text color="white" fontSize="$8" marginBottom="$6">
							"{item.text}"
						</Text>
						<Text
							alignSelf="flex-end"
							color="white"
							fontSize="$6"
							fontStyle="italic"
						>
							-{item.author}
						</Text>
					</YStack>
				</YStack>
			)}
		/>
	);
}
