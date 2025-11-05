import { BookType } from "@/types/book";
import { books as booksData } from "@/data/books";

import BookList from "../../components/BookList";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CounterRow from "@/components/CounterRow";
import Header from "@/components/Header";
import colors from "@/theme/color";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
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
      <Header />
      <Button title="Open Modal" onPress={() => router.push("/modal")} />
      <CounterRow bookList={books} />
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
    backgroundColor: colors.primaryBackground,
    gap: 30,
    paddingHorizontal: 10,
  },
});
