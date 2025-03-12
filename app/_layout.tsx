import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

export default function RootLayout() {
  // Load fonts
  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    // Wrap your Stack component with AuthProvider
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* You can define other routes here if needed */}
      </Stack>
    </AuthProvider>
  );
}
