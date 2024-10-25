import { Tabs } from "expo-router";
import { icons } from "~/constants";
import { Image, ImageSourcePropType, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function TabBarIcon({
  focused,
  color,
  size,
  icon,
}: {
  focused: boolean;
  color: string;
  size: number;
  icon: ImageSourcePropType;
}) {
  return (
    <View className="flex items-center justify-center rounded-full">
      <View
        className={`flex items-center justify-center rounded-full w-14 h-14 ${focused ? "bg-white" : "bg-transparent"}`}
      >
        <Image
          source={icon}
          alt="icon bar"
          width={10}
          height={10}
          className="w-11 h-11"
        />
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#555",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#d5d5d5",
          paddingVertical: 5,
          height: 72,
          overflow: "hidden",
          padding: 0,
          marginBottom: 10,
          borderRadius: 50,
          marginHorizontal: 20,
          position: "absolute",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon
              focused={focused}
              color={color}
              size={size}
              icon={icons.dashboardW}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          title: "list",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon
              focused={focused}
              color={color}
              size={size}
              icon={icons.listW}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="tranier"
        options={{
          title: "trainer",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon
              focused={focused}
              color={color}
              size={size}
              icon={icons.trainer}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="details/[id]"
        options={{
          href: null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="trainerDetail/[id]"
        options={{
          href: null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="addMember"
        options={{
          href: null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="addTrainer"
        options={{
          href: null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Tabs>
  );
}
