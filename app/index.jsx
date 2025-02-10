import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold">Aora!</Text>
      <Link href={"/tabs/home"} className="text-blue-500 text-lg mt-4">
        Go to Home
      </Link>
    </View>
  );
}
