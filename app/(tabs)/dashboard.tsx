import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Platform,
} from "react-native";
import {
  ContributionGraph,
  LineChart,
  ProgressChart,
} from "react-native-chart-kit";
import { Bell, BarChart2, List, User } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "~/constants";
import Logo from "~/components/Logo";
import StyledText from "~/components/StyledText";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AnalyticsDashboard = () => {
  const revenueData = {
    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50, 75, 30, 70, 40, 60],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Revenue line
        strokeWidth: 2,
      },
      {
        data: [30, 35, 38, 55, 70, 35, 40, 65, 25, 50, 30, 45],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Expenses line
        strokeWidth: 2,
      },
    ],
  };

  const data = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.4, 0.6, 0.8],
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          marginBottom: Platform.OS === "android" ? 0 : 0, // needs improvement
        }}
      >
        <ImageBackground
          source={images.background}
          className="flex-1"
          resizeMode="cover"
        >
          <View className="bg-black/60 p-5 min-h-screen">
            <View className="flex-row justify-between items-center mb-4">
              <Bell size={27} color="white" />
              <Logo />
            </View>
            <StyledText
              className="text-3xl mb-4 text-white"
              fontClassName="font-hanal"
            >
              Analytics
            </StyledText>

            <View className="flex-row justify-between mb-4">
              <View className="bg-[#D9D9D9]/40 p-4 rounded-lg flex-1 mr-2">
                <StyledText className="text-black font-montBold text-lg">
                  Members
                </StyledText>
                <StyledText className="text-3xl font-montBold text-white">
                  90
                </StyledText>
                <StyledText className="text-gray-600 text-sm">
                  Active Members
                </StyledText>
              </View>
              <View className="bg-[#D9D9D9]/40 p-4 rounded-lg flex-1 ml-2">
                <StyledText className="text-black font-montBold text-lg">
                  Revenue
                </StyledText>
                <StyledText className="text-3xl font-montBold text-white">
                  $12.1K
                </StyledText>
                <StyledText className="text-red-500 text-sm">▼ 2.3%</StyledText>
              </View>
            </View>
            {/* Section for Visited and Trainers */}
            <View className="flex-row justify-between mb-4">
              <View className="bg-[#D9D9D9]/40 p-4 rounded-lg flex-1 mr-2">
                <StyledText className="text-black font-montBold text-lg">
                  Visited
                </StyledText>
                <StyledText className="text-3xl font-montBold text-white">
                  65
                </StyledText>
                <StyledText className="text-gray-600 text-sm">
                  Daily Average
                </StyledText>
              </View>
              <View className="bg-[#D9D9D9]/40 p-4 rounded-lg flex-1 ml-2">
                <StyledText className="text-black font-montBold text-lg">
                  Trainers
                </StyledText>
                <StyledText className="text-3xl font-montBold text-white">
                  5
                </StyledText>
                <StyledText className="text-gray-600 text-sm">
                  Active Trainers
                </StyledText>
              </View>
            </View>
            {/* Revenue & Expenses Chart */}
            <View className="bg-[#D9D9D9]/40 p-4 rounded-lg mb-4">
              <StyledText className="text-lg font-montBold mb-2">
                Revenue & Expenses
              </StyledText>
              <LineChart
                data={revenueData}
                width={windowWidth - 60}
                height={200}
                chartConfig={{
                  backgroundGradientFrom: "#b0b0b0",
                  backgroundGradientTo: "#D9D9D9",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
            {/* Gym Capacity Chart */}
            <View className="bg-[#D9D9D9]/40 p-4 rounded-lg mb-4">
              <StyledText className="text-lg font-bold mb-2">
                Gym Capacity
              </StyledText>
              <StyledText className="text-gray-600 mb-2">
                Indoor and outdoor
              </StyledText>
              <ProgressChart
                data={data}
                width={windowWidth - 60}
                height={200} // Adjusted height for better visualization
                strokeWidth={16}
                chartConfig={{
                  backgroundGradientFrom: "#b0b0b0",
                  backgroundGradientTo: "#D9D9D9",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                radius={32}
                hideLegend={false}
              />

              <StyledText className="mt-2">Space status: 56%</StyledText>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnalyticsDashboard;
