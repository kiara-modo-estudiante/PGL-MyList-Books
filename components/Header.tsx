import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@/theme/color";
import typography from "@/theme/typography";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitleContainer}>
        <Text style={[typography.title, styles.headerTitle]}>Book Up</Text>
      </View>
      <Text style={[typography.body, styles.headerSubtitle]}>
        Shelf control starts here...
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: "100%",
    alignItems: "center",
    paddingTop: 60,
  },
  headerTitleContainer: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 20,
    width: "60%",
    borderRadius: 40,
    marginBottom: 20,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 30,
  },
  headerSubtitle: {
    fontStyle: "italic",
  },
});
