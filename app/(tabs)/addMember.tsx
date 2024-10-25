import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { ChevronLeft, ChevronDown, Image, Camera } from "lucide-react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "~/constants";
import StyledText from "~/components/StyledText";

export default function AddMemberForm() {
  const [gender, setGender] = useState("");
  const [packageType, setPackageType] = useState("");
  const [shift, setShift] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#f5f0e8]">
      <ScrollView>
        <ImageBackground
          source={images.background}
          className="flex-1"
          resizeMode="cover"
        >
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="absolute top-4 left-4 z-10 bg-white rounded-full p-2"
          >
            <ChevronLeft size={24} color="#000000" />
          </TouchableOpacity>
          <View className="bg-black/70 min-h-screen py-10 px-6">
            <StyledText
              className="text-3xl  mt-8 mb-4 text-white/90"
              fontClassName="font-hanal"
            >
              Add New Member
            </StyledText>

            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
            <InputField placeholder="Age" keyboardType="numeric" />

            <DropdownField label="Gender" value={gender} setValue={setGender} />
            <InputField placeholder="Height" />
            <InputField placeholder="Weight" />
            <DropdownField
              label="Package"
              value={packageType}
              setValue={setPackageType}
            />
            <DropdownField label="Shift" value={shift} setValue={setShift} />

            <View className="bg-white/80 rounded-3xl p-4 mb-4">
              <Text className="text-black mb-4 font-montRegular">
                Set Image
              </Text>
              <View className="flex-row justify-around">
                <ImageButton
                  icon={<Image size={24} color="#000000" />}
                  label="Select Image"
                />
                <ImageButton
                  icon={<Camera size={24} color="#000000" />}
                  label="Take Photo"
                />
              </View>
            </View>

            <TouchableOpacity className="bg-white/90 py-4 rounded-3xl">
              <Text className="text-black text-center font-montSemiBold text-lg">
                Submit &rarr;
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
function InputField({
  placeholder,
  keyboardType = "default",
}: {
  placeholder: string;
  keyboardType?: "default" | "numeric";
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#000000"
      className="bg-white/80 rounded-xl p-4 mb-4"
      keyboardType={keyboardType}
    />
  );
}

function DropdownField({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <TouchableOpacity
      className="bg-white/80 flex-row justify-between items-center p-4 rounded-xl mb-4 font-montRegular"
      onPress={() => {
        /* Handle dropdown open */
      }}
    >
      <Text className="text-black">{value || label}</Text>
      <ChevronDown size={24} color="#000000" />
    </TouchableOpacity>
  );
}

function ImageButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <TouchableOpacity className="bg-white/80 p-2 rounded-lg items-center">
      {icon}
      <Text className="text-black text-xs mt-1 font-montRegular">{label}</Text>
    </TouchableOpacity>
  );
}
