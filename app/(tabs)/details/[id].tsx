import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import {
  ChevronLeft,
  Calendar,
  Ruler,
  Weight,
  User,
  Clock,
  Phone,
  Mail,
} from "lucide-react-native";

// Assume these imports are correctly set up in your project
import { images } from "~/constants";

export default function MemberProfile() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={images.background}
        className="flex-1"
        resizeMode="cover"
      >
        <ScrollView className="flex-1 bg-black/70">
          <View className="p-6">
            <View className="bg-white rounded-3xl overflow-hidden">
              <TouchableOpacity
                onPress={() => router.back()}
                className="absolute top-4 left-4 z-10 bg-white rounded-full p-2"
              >
                <ChevronLeft size={24} color="#000000" />
              </TouchableOpacity>
              <Image
                source={images.background}
                className="w-full h-64 rounded-t-3xl"
              />
              <View className="p-6 bg-white/30">
                <Text className="text-2xl font-bold mb-4">Temesgen Getye</Text>

                <View className="flex-row flex-wrap justify-between mb-6">
                  <InfoCard
                    icon={<Calendar size={20} color="#000000" />}
                    label="Package"
                    value="6 months"
                  />
                  <InfoCard
                    icon={<User size={20} color="#000000" />}
                    label="Age"
                    value="25 Years"
                  />
                  <InfoCard
                    icon={<Phone size={20} color="#000000" />}
                    label="Phone"
                    value="123-456-7890"
                  />
                  <InfoCard
                    icon={<Weight size={20} color="#000000" />}
                    label="Weight"
                    value="10 kg"
                  />
                  <InfoCard
                    icon={<Mail size={20} color="#000000" />}
                    label="Email"
                    value="temesgen@example.com"
                  />
                  <InfoCard
                    icon={<Ruler size={20} color="#000000" />}
                    label="Height"
                    value="1.79 m"
                  />
                </View>

                <View className="space-y-4 mb-6">
                  <DetailItem label="Gender" value="Men" />
                  <DetailItem label="Shift" value="Day" />
                </View>

                <TouchableOpacity
                  className="mt-6 bg-black py-3 rounded-full"
                  onPress={() => router.back()}
                >
                  <Text className="text-center text-gray-100 font-semibold">
                    BACK -&gt;
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <View className="bg-white rounded-xl p-3 mb-4 w-[48%] shadow">
      <View className="flex-row items-center mb-2">
        {icon}
        <Text className="text-gray-600 ml-2">{label}</Text>
      </View>
      <Text className="text-lg font-semibold">{value}</Text>
    </View>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between border-b border-gray-200 py-2">
      <Text className="text-gray-600">{label}</Text>
      <Text className="font-semibold text-gray-800">{value}</Text>
    </View>
  );
}
