import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "./Counter";
import { useBookContext } from "@/context/BookContext";
import { BookType } from "@/types/book";

const CounterRow = () => {
  const { books } = useBookContext();

  const totalBookCount = books.length.toString();

  const readBookCount = books.filter((book) => book.isRead).length.toString();

  const sumSpentOnReadBooks =
    "€ " +
    books
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
