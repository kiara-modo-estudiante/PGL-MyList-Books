import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Book from "./Book";
import colors from "../theme/color";
import { BookListProps, BookType } from "../types/book";

/**
 * A component that displays a list of books. If no books are available,
 * it shows a placeholder message.
 *
 * @returns A list of books or a message indicating no books are available.
 */
const BookList = ({ books, deleteBook, toggleReadStatus }: BookListProps) => {
  return (
    <View style={styles.container}>
      {books.length > 0 ? (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: BookType }) => (
            <Book
              {...item}
              deleteBook={deleteBook}
              toggleReadStatus={toggleReadStatus}
            />
          )}
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
    marginVertical: 100,
    fontSize: 20,
    fontWeight: 500,
    color: colors.primaryText,
  },
});
