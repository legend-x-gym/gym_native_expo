import { Link, Stack } from "expo-router";
import { View } from "react-native";
import StyledText from "~/components/StyledText";
import { Text } from "~/components/ui/text";

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <StyledText>This screen doesn't exist.</StyledText>

        <Link href="/(tabs)/dashboard">
          <StyledText>Go to home screen!</StyledText>
        </Link>
      </View>
    </View>
  );
}
