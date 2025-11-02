import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Book from "./Book";
import { books } from "@/data/books";
import { Book as BookType } from "@/types/book";

const BookList = () => {
  const renderItem = ({ item }: { item: BookType }) => <Book {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default BookList;
