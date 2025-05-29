import { Slot, Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
    card: "#101010",
  },
};

export default function RootLayout() {
  console.log("Root layout rendered");
  return (
    <ThemeProvider value={myTheme}>
      <Slot />
    </ThemeProvider>
  );
}
