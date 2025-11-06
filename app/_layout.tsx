import { Stack } from "expo-router";
import { BookProvider } from "@/context/BookContext";

export default function Layout() {
  return (
    <BookProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "transparentModal",
            animation: "fade",
          }}
        />
      </Stack>
    </BookProvider>
  );
}
