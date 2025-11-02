import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Book as BookType, CategoryImages } from "../types/book";
import colors from "@/theme/color";
import typography from "@/theme/typography";

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
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={cover} style={styles.coverImage} />
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
              />
              <Text style={typography.read}>Already read!</Text>
            </View>
          ) : (
            <View style={styles.readContainer}>
              <FontAwesome5
                name="circle"
                size={20}
                color={colors.tertiaryText}
              />
              <Text style={typography.read}>Not yet read</Text>
            </View>
          )}
          <FontAwesome5 name="trash" size={20} color={colors.delete} />
        </View>
        <Text style={[typography.body, styles.priceText]}>€{price}</Text>
      </View>
      <Image source={CategoryImages[category]} style={styles.categoryImage} />
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
