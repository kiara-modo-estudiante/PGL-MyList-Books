import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@/theme/color";
import BookForm from "@/components/BookForm";

export default function Modal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.closeIcon}>
          <FontAwesome5
            name="window-close"
            size={30}
            color={colors.delete}
            onPress={() => router.back()}
          />
        </View>
        <BookForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(33, 62, 77, 0.7)",
  },
  formContainer: {
    backgroundColor: colors.secondaryBackground,
    width: "80%",
    padding: 40,
  },
  closeIcon: {
    position: "absolute",
    top: 1,
    right: 3,
  },
});
