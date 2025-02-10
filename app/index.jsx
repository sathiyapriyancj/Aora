import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import { images } from "../constants";
import CustomButton from "./components/CustomButton";

export default function IndexScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="w-full justify-center items-center min-h-[95vh] px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className=" max-w--[380px]  w-full h-[300px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[120px] h-[14px] absolute bottom-1 right-2"
                resizeMode="contain"
              />
              <Image
                source={images.path}
                className="w-[120px] h-[14px] absolute bottom-1 right-1"
                resizeMode="contain"
              />
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
            <CustomButton
              title={"Continue with Email"}
              handlePress={() => router.push("./auth/sign-in")}
              containerStyles={"w-full mt-7"}
            />
          </View>
          <StatusBar backgroundColor="#161622" style="light" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
