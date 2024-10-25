import { router } from "expo-router";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledText from "~/components/StyledText";
import { images } from "~/constants/index";
export default function Screen() {
  return (
    <SafeAreaView className="min-h-screen flex flex-1 flex-col">
      <View className="flex-1 bg-black items-center justify-center p-8">
        <Image
          source={images.intro}
          className="w-80 h-80 mb-8"
          resizeMode="cover"
        />

        <StyledText
          className="text-white text-4xl text-center mb-20"
          fontClassName="font-hanal"
        >
          WELCOME TO MY GYM DASHBOARD
        </StyledText>
        <TouchableOpacity
          className="bg-white w-full py-3 rounded-full mb-4"
          onPress={() => router.replace("/(auth)/login")}
        >
          <StyledText
            className="text-black text-center text-lg rounded-xl "
            fontClassName="font-montSemiBold"
          >
            login
          </StyledText>
        </TouchableOpacity>
        <StyledText className="text-white text-sm">
          Didn't have an account ?
          <StyledText className="" fontClassName="font-hanal">
            SIGN UP
          </StyledText>
        </StyledText>
      </View>
    </SafeAreaView>
  );
}
