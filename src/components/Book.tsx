import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Book as BookType, CategoryImages } from "../types/book";
import colors from "@/theme/color";
import typography from "@/theme/typography";
import DeleteConfirmationModal from "./modals/DeleteConfirmationModal";
import { useBookContext } from "@/context/BookContext";

const Book = ({
  id,
  title,
  author,
  cover,
  price,
  category,
  isRead,
  yearPublished,
}: BookType) => {
  const { deleteBook } = useBookContext();
  const [isBookRead, setIsBookRead] = useState(isRead);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleReadStatus = () => {
    setIsBookRead((prevState) => !prevState);
  };

  const handleDelete = () => {
    setIsModalVisible(false);
    deleteBook(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={cover} style={styles.coverImage} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[typography.title, { paddingRight: 70 }]}>{title}</Text>
        <Text style={typography.body}>{`${author} (${yearPublished})`}</Text>
        <View style={styles.readAndDelete}>
          {isBookRead ? (
            <View style={styles.readContainer}>
              <FontAwesome5
                name="check-circle"
                size={20}
                color={colors.tertiaryText}
                onPress={toggleReadStatus}
              />
              <Text style={typography.read}>Already read!</Text>
            </View>
          ) : (
            <View style={styles.readContainer}>
              <FontAwesome5
                name="circle"
                size={20}
                color={colors.tertiaryText}
                onPress={toggleReadStatus}
              />
              <Text style={typography.read}>Not yet read</Text>
            </View>
          )}
          <FontAwesome5
            name="trash"
            size={20}
            color={colors.delete}
            onPress={() => setIsModalVisible(true)}
          />
        </View>
        <Text style={[typography.body, styles.priceText]}>€{price}</Text>
      </View>
      <Image source={CategoryImages[category]} style={styles.categoryImage} />
      <DeleteConfirmationModal
        visible={isModalVisible}
        title={title}
        onCancel={() => setIsModalVisible(false)}
        onDelete={handleDelete}
      />
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackground,
    flexDirection: "row",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    width: "30%",
    alignItems: "flex-start",
    marginRight: 20,
  },
  coverImage: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  infoContainer: {
    width: "70%",
  },
  categoryImage: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  readAndDelete: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingTop: 30,
  },
  readContainer: {
    flexDirection: "row",
    gap: 5,
  },
  priceText: {
    textAlign: "right",
    paddingTop: 15,
    paddingRight: 20,
  },
});
