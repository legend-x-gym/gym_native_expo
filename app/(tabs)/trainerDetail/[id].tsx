import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import {
  ChevronLeft,
  Dumbbell,
  Clock,
  Phone,
  Mail,
  Calendar,
  Award,
  Users,
} from "lucide-react-native";

import { images } from "~/constants";

export default function TrainerProfile() {
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
            <TouchableOpacity
              onPress={() => router.back()}
              className="absolute top-2 left-4 z-10 bg-white rounded-full p-2"
            >
              <ChevronLeft size={24} color="#000000" />
            </TouchableOpacity>

            <View className="bg-white rounded-3xl overflow-hidden mt-10">
              <View className="p-6 bg-white/30">
                <Text className="text-3xl font-bold mb-4">John Doe</Text>
                <Text className="text-xl text-gray-600 mb-6">
                  Senior Fitness Trainer
                </Text>

                <View className="flex-row flex-wrap justify-between mb-6">
                  <InfoCard
                    icon={<Dumbbell size={20} color="#000000" />}
                    label="Specialization"
                    value="Strength Training"
                  />
                  <InfoCard
                    icon={<Clock size={20} color="#000000" />}
                    label="Experience"
                    value="8 Years"
                  />
                  <InfoCard
                    icon={<Phone size={20} color="#000000" />}
                    label="Phone"
                    value="123-456-7890"
                  />
                  <InfoCard
                    icon={<Mail size={20} color="#000000" />}
                    label="Email"
                    value="john.doe@gymexample.com"
                  />
                  <InfoCard
                    icon={<Calendar size={20} color="#000000" />}
                    label="Availability"
                    value="Mon-Fri, 9AM-5PM"
                  />
                  <InfoCard
                    icon={<Award size={20} color="#000000" />}
                    label="Certifications"
                    value="NASM, ACE"
                  />
                </View>

                <View className="space-y-4 mb-6">
                  <DetailItem label="Languages" value="English, Spanish" />
                  <DetailItem label="Average Rating" value="4.8/5" />
                </View>

                <View className="bg-gray-100 rounded-xl p-4 mb-6">
                  <Text className="font-semibold mb-2">About Me</Text>
                  <Text className="text-gray-600">
                    Passionate about helping clients achieve their fitness
                    goals. Specialized in strength training and nutrition
                    planning. Committed to providing personalized workout plans
                    and motivation for all fitness levels.
                  </Text>
                </View>

                <TouchableOpacity
                  className="mt-6 bg-black py-3 rounded-full"
                  onPress={() => {
                    /* Handle booking logic */
                  }}
                >
                  <Text className="text-center text-gray-100 font-semibold">
                    Back
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
