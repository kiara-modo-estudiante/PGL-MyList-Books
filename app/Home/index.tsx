import BookList from "../../components/BookList";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CounterRow from "@/components/CounterRow";
import Header from "@/components/Header";
import colors from "@/theme/color";
import { useRouter } from "expo-router";
import typography from "@/theme/typography";
import { useBookContext } from "@/context/BookContext";

const Home = () => {
  const router = useRouter();
  const { books, deleteBook, toggleReadStatus } = useBookContext();

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
