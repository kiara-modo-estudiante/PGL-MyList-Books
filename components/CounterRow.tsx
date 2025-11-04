import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "./Counter";
import { CounterRowProps } from "@/types/counter";

const CounterRow = ({ bookList }: CounterRowProps) => {
  const totalBookCount = bookList.length.toString();

  const readBookCount = bookList
    .filter((book) => book.isRead)
    .length.toString();

  const sumSpentOnReadBooks =
    "€ " +
    bookList
      .filter((book) => book.isRead)
      .reduce((sum, book) => sum + (book.price || 0), 0)
      .toFixed(2);

  return (
    <View style={styles.row}>
      <Counter counterLabel={"Logged:"} counterValue={totalBookCount} />
      <Counter counterLabel={"Read:"} counterValue={readBookCount} />
      <Counter counterLabel={"Spent:"} counterValue={sumSpentOnReadBooks} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default CounterRow;
