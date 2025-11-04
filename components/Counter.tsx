import colors from "@/theme/color";
import typography from "@/theme/typography";
import { CounterProps } from "@/types/counter";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter: React.FC<CounterProps> = ({ counterLabel, counterValue }) => {
  return (
    <View style={styles.container}>
      <Text style={typography.subheading}>{counterLabel}</Text>
      <View style={styles.circle}>
        <Text style={typography.count}>{counterValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    backgroundColor: colors.highlight,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  circleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Counter;
