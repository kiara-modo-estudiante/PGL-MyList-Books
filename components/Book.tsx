import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { BookProps, CategoryImages } from "../types/book";
import colors from "../theme/color";
import typography from "../theme/typography";
import DeleteConfirmationModal from "./modals/DeleteConfirmationModal";

/**
 * A component that displays the details of a single book, including its
 * title, author, cover image, price, category, and read status. It also
 * allows the user to toggle the read status and delete the book.
 *
 * @param id - The unique identifier of the book.
 * @param title - The title of the book.
 * @param author - The author of the book.
 * @param cover - The cover image of the book.
 * @param price - The price of the book.
 * @param category - The category of the book.
 * @param isRead - Whether the book has been read.
 * @param yearPublished - The year the book was published.
 *
 * @returns A styled component displaying the book's details.
 */
const Book = ({
  id,
  title,
  author,
  cover,
  price,
  category,
  isRead,
  yearPublished,
  deleteBook,
  toggleReadStatus,
}: BookProps) => {
  const defaultCover = require("../assets/images/covers/default.jpg");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleDelete = () => {
    setIsModalVisible(false);
    deleteBook(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageError ? defaultCover : cover || defaultCover}
          style={styles.coverImage}
          onError={() => setImageError(true)}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[typography.title, { paddingRight: 70 }]}>{title}</Text>
        <Text style={typography.body}>{`${author} (${yearPublished})`}</Text>
        <View style={styles.readAndDelete}>
          {isRead ? (
            <View style={styles.readContainer}>
              <FontAwesome5
                name="check-circle"
                size={20}
                color={colors.tertiaryText}
                onPress={() => toggleReadStatus(id)}
              />
              <Text style={typography.read}>Already read!</Text>
            </View>
          ) : (
            <View style={styles.readContainer}>
              <FontAwesome5
                name="circle"
                size={20}
                color={colors.tertiaryText}
                onPress={() => toggleReadStatus(id)}
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
        <Text style={[typography.body, styles.priceText]}>
          €{price.toFixed(2)}
        </Text>
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
