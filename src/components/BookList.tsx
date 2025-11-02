import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Book from "./Book";
import { useBookContext } from "@/context/BookContext";
import colors from "@/theme/color";
import { Book as BookType } from "@/types/book";

const BookList = () => {
  const { books } = useBookContext();

  return (
    <View style={styles.container}>
      {books.length > 0 ? (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: BookType }) => <Book {...item} />}
        />
      ) : (
        <Text style={styles.emptyText}>No books added yet...</Text>
      )}
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyText: {
    textAlign: "center",
    marginVertical: 200,
    fontSize: 20,
    color: colors.primaryText,
  },
});
