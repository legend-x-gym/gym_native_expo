import "~/global.css";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform } from "react-native";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import { ThemeToggle } from "~/components/ThemeToggle";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  const [isFontLoaded] = useFonts({
    HanaleiFill: require("~/assets/font/HanaleiFill-Regular.ttf"),
    "Montserrat-BlackItalic": require("~/assets/font/Montserrat Black Italic 900.ttf"),
    "Montserrat-Bold": require("~/assets/font/Montserrat Bold 700.ttf"),
    "Montserrat-BoldItalic": require("~/assets/font/Montserrat Bold Italic 700.ttf"),
    "Monserrat-ExtraBold": require("~/assets/font/Montserrat ExtraBold 800.ttf"),
    "Montserrat-ExtraBold-Italic": require("~/assets/font/Montserrat ExtraBold Italic 800.ttf"),
    "Montserrat-ExtraLight": require("~/assets/font/Montserrat ExtraLight 275.ttf"),
    "Montserrat-ExtraLight-Italic": require("~/assets/font/Montserrat ExtraLight Italic 275.ttf"),
    "Montserrat-Italic": require("~/assets/font/Montserrat Italic 400.ttf"),
    "Montserrat-Light": require("~/assets/font/Montserrat Light 300.ttf"),
    "Montserrat-Light-Italic": require("~/assets/font/Montserrat Light Italic 300.ttf"),
    "Montserrat-Medium": require("~/assets/font/Montserrat Medium 500.ttf"),
    "Montserrat-Medium-Italic": require("~/assets/font/Montserrat Medium Italic 500.ttf"),
    "Montserrat-Regular": require("~/assets/font/Montserrat Regular 400.ttf"),
    "Montserrat-SemiBold": require("~/assets/font/Montserrat SemiBold 600.ttf"),
    "Montserrat-SemiBold-Italic": require("~/assets/font/Montserrat SemiBold Italic 600.ttf"),
    "Montserrat-Thin": require("~/assets/font/Montserrat Thin 250.ttf"),
    "Montserrat-Thin-Italic": require("~/assets/font/Montserrat Thin Italic 250.ttf"),
  });

  React.useEffect(() => {
    if (isFontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("theme");
      if (Platform.OS === "web") {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add("bg-background");
      }
      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);
        setAndroidNavigationBar(colorTheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      setAndroidNavigationBar(colorTheme);
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  if (!isFontLoaded) {
    return null;
  }
  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Stack>
        <Stack.Screen
          name="index"
          // options={{
          //   title: "Starter Base",
          //   headerRight: () => <ThemeToggle />,
          // }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
