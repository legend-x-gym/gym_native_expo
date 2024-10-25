import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StyledText from "~/components/StyledText";
import { images } from "~/constants";
import Logo from "~/components/Logo";
import { Link, router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const members = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: "Temesgen Getye",
  date: "19/12/2024",
  status: "Active",
  image: images.background,
}));

export default function MembersList() {
  return (
    <SafeAreaView className="flex-1 bg-[#f5f0e8]">
      <ImageBackground
        source={images.background}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="bg-black/70 min-h-screen p-6">
          <View className="flex-row justify-between items-center mb-6">
            <Ionicons name="search" size={30} color="#fff" />
            <Logo />
          </View>

          <StyledText
            className="text-3xl mb-4 text-white"
            fontClassName="font-hanal"
          >
            Trainer List{" "}
            <MaterialCommunityIcons name="arm-flex" size={30} color="white" />
          </StyledText>

          <TouchableOpacity
            className="bg-[#b0b0b0] rounded-full py-3 px-4 mb-6 flex-row items-center justify-center"
            onPress={() => {
              router.push("/addTrainer");
            }}
          >
            <Ionicons name="add-circle" size={24} color="#fff" />
            <StyledText className="ml-2 text-white font-semibold">
              Add Trianier
            </StyledText>
          </TouchableOpacity>

          <FlatList
            data={members}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              paddingBottom: Platform.OS === "android" ? 300 : 0,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View className="flex-row items-center justify-between mb-4 bg-black/20 p-4 rounded-xl">
                <Link
                  href={{
                    pathname: "/(tabs)/trainerDetail/[id]",
                    params: { id: item.id },
                  }}
                >
                  <View className="flex-row items-center flex-1 gap-2">
                    <Image
                      source={item.image}
                      className="w-12 h-12 rounded-full mr-2"
                    />
                    <View className="flex-1">
                      <StyledText
                        className=" text-white"
                        fontClassName="font-montSemiBold"
                      >
                        {item.name} {index}
                      </StyledText>
                      <View className="flex-row items-center gap-2">
                        <StyledText className="text-gray-300 text-sm">
                          {item.date}
                        </StyledText>
                        <StyledText className="text-green-400 text-sm ">
                          𝌟 Status {item.status}
                        </StyledText>
                      </View>
                    </View>
                  </View>
                </Link>
                <TouchableOpacity className="bg-[#a1a1a1] rounded-full p-1">
                  <Ionicons name="remove" size={15} color="white" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
