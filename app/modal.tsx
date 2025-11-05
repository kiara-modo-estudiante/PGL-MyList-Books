import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(33, 62, 77, 0.7)",
  },
});
