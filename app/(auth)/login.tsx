import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { images } from "~/constants/index";

import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import StyledText from "~/components/StyledText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen() {
  return (
    <SafeAreaView className="min-h-screen bg-black/70 flex-1">
      <ImageBackground
        source={images.background}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="absolute inset-0 bg-black opacity-60" />
        <View className="absolute top-0 left-0 right-0 min-w-screen">
          <Svg height="280" width={windowWidth} viewBox="0 0 400 300">
            <Path
              d="M0,200 C0,300 400,100 400,200 L400,0 L0,0 Z"
              fill="black"
            />
          </Svg>
        </View>

        <View className="flex-1 p-6 bg-black/60">
          <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center mb-8 mt-8">
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <View className="items-center mb-12">
            <Image
              source={{ uri: "/placeholder.svg?height=80&width=80" }}
              className="w-20 h-20"
            />
          </View>

          <View className="flex-1 justify-center">
            <StyledText
              className="text-white text-4xl font-hanal mb-2"
              fontClassName="font-hanal"
            >
              Welcome Back
            </StyledText>
            <StyledText className="text-gray-300 mb-8">
              Log in to your account
            </StyledText>

            <View className="bg-black bg-opacity-70 rounded-lg mb-4 flex-row items-center px-4 py-3">
              <Ionicons name="mail" size={24} color="white" className="mr-2" />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#9CA3AF"
                className="flex-1 text-white"
              />
            </View>

            <View className="bg-black bg-opacity-70 rounded-lg mb-6 flex-row items-center px-4 py-3">
              <Ionicons
                name="lock-closed"
                size={24}
                color="white"
                className="mr-2"
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                className="flex-1 text-white"
              />
            </View>

            <View className="flex-row justify-between items-center mb-8">
              <View className="flex-row items-center">
                <TouchableOpacity className="w-5 h-5 border border-white rounded-sm mr-2" />
                <StyledText className="text-white text-sm">
                  Remember Me
                </StyledText>
              </View>
              <TouchableOpacity>
                <StyledText className="text-white text-sm">
                  Forgot Password?
                </StyledText>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className="bg-black rounded-lg py-4 items-center mb-6"
              onPress={() => {
                router.push("/(tabs)/dashboard");
              }}
            >
              <StyledText className="text-white font-bold text-lg rounded-xl">
                Login
              </StyledText>
            </TouchableOpacity>

            <View className="flex-row justify-center">
              <StyledText className="text-white text-sm">
                Don't have an account?
              </StyledText>
              <TouchableOpacity>
                <StyledText
                  className="text-white font-hanal text-sm"
                  fontClassName="font-hanal"
                >
                  SIGN UP
                </StyledText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
