import { BookType } from "@/types/book";
import { books as booksData } from "@/data/books";

import BookList from "../../components/BookList";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import CounterRow from "@/components/CounterRow";
import Header from "@/components/Header";
import colors from "@/theme/color";
import { useRouter } from "expo-router";
import typography from "@/theme/typography";

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
      <CounterRow bookList={books} />
      <Pressable style={styles.button} onPress={() => router.push("/modal")}>
        <FontAwesome5 name="book" size={20} style={typography.button} />
        <Text style={typography.button}>Add New Book</Text>
      </Pressable>
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
  button: {
    flexDirection: "row",
    backgroundColor: colors.buttonBackground,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
