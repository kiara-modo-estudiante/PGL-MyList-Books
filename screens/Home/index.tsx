import { Book as BookType } from "@/types/book";
import { books as booksData } from "@/data/books";

import BookList from "../../components/BookList";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [books, setBooks] = useState<BookType[]>(booksData);

  const deleteBook = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const toggleReadStatus = (id: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  return (
    <View style={styles.container}>
      <BookList
        books={books}
        deleteBook={deleteBook}
        toggleReadStatus={toggleReadStatus}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
