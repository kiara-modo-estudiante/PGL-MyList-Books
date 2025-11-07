import BookList from "../../components/BookList";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CounterRow from "@/components/CounterRow";
import Header from "@/components/Header";
import colors from "@/theme/color";
import { useRouter } from "expo-router";
import typography from "@/theme/typography";
import { useBookContext } from "@/context/BookContext";
import DeleteListConfirmation from "@/components/modals/DeleteListConfirmation";

const Home = () => {
  const router = useRouter();
  const { books, deleteAllBooks } = useBookContext();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = () => {
    setIsModalVisible(false);
    deleteAllBooks();
  };

  const isDeleteDisabled = books.length === 0;

  return (
    <View style={styles.container}>
      <Header />
      <CounterRow />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.addButton}
          onPress={() => router.push("/modal")}
        >
          <FontAwesome5 name="book" size={20} style={typography.button} />
          <Text style={typography.button}>Add New Book</Text>
        </Pressable>
        <Pressable
          style={[
            styles.deleteButton,
            isDeleteDisabled && styles.deleteButtonDisabled,
          ]}
          onPress={() => setIsModalVisible(true)}
          disabled={isDeleteDisabled}
        >
          <FontAwesome5 name="trash" size={20} style={typography.button} />
          <Text style={typography.button}>Delete All Books</Text>
        </Pressable>
      </View>
      <BookList />
      <DeleteListConfirmation
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onDelete={handleDelete}
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
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  addButton: {
    flexDirection: "row",
    backgroundColor: colors.buttonBackground,
    paddingVertical: 10,
    width: "45%",
    justifyContent: "center",
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
  deleteButton: {
    flexDirection: "row",
    backgroundColor: colors.delete,
    paddingVertical: 10,
    width: "45%",
    justifyContent: "center",
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
  deleteButtonDisabled: {
    backgroundColor: "gray",
    shadowOpacity: 0,
  },
});
