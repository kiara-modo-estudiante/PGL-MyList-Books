import typography from "@/theme/typography";
import { BookType, Category } from "@/types/book";
import { useState } from "react";
import uuid from "react-native-uuid";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@/theme/color";
import { useRouter } from "expo-router";
import { useBookContext } from "@/context/BookContext";

export default function Modal() {
  const router = useRouter();
  const { addBook } = useBookContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [cover, setCover] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const [price, setPrice] = useState("");
  const [isRead, setIsRead] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    author: "",
    yearPublished: "",
    cover: "",
    category: "",
    price: "",
  });

  const validateForm = () => {
    const newErrors: typeof errors = {
      title: "",
      author: "",
      yearPublished: "",
      cover: "",
      category: "",
      price: "",
    };

    if (!title) newErrors.title = "* Please fill out this field.";
    if (!author) newErrors.author = "* Please fill out this field.";
    if (!yearPublished) {
      newErrors.yearPublished = "* Please fill out this field.";
    } else if (
      isNaN(Number(yearPublished)) ||
      Number(yearPublished) < 0 ||
      Number(yearPublished) > new Date().getFullYear()
    ) {
      newErrors.yearPublished = "* Invalid year.";
    }
    if (category == null) newErrors.category = "* Please select a category.";
    if (!price) {
      newErrors.price = "* Please fill out this field.";
    } else {
      const normalizedPrice = price.replace(",", ".");
      if (isNaN(Number(normalizedPrice)) || Number(normalizedPrice) < 0) {
        newErrors.price = "* Invalid price.";
      }
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const normalizedPrice = parseFloat(price.replace(",", "."));

    const newBook: BookType = {
      id: uuid.v4().toString(),
      title,
      author,
      yearPublished: parseInt(yearPublished, 10),
      cover: { uri: cover },
      category: category as Category,
      price: normalizedPrice,
      isRead,
    };

    addBook(newBook);
    router.back();
    alert("Book saved successfully! ⭐️");

    setTitle("");
    setAuthor("");
    setYearPublished("");
    setCover("");
    setCategory(null);
    setPrice("");
    setIsRead(false);
    setErrors({
      title: "",
      author: "",
      yearPublished: "",
      cover: "",
      category: "",
      price: "",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.closeIcon}>
          <FontAwesome5
            name="window-close"
            size={30}
            color={colors.delete}
            onPress={() => router.back()}
          />
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Title:</Text>
          <TextInput
            value={title}
            onChangeText={(text) => {
              setTitle(text);
              setErrors((prev) => ({ ...prev, title: "" }));
            }}
            style={styles.input}
          />
          {errors.title ? (
            <Text style={styles.errorText}>{errors.title}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Author:</Text>
          <TextInput
            value={author}
            onChangeText={(text) => {
              setAuthor(text);
              setErrors((prev) => ({ ...prev, author: "" }));
            }}
            style={styles.input}
          />
          {errors.author ? (
            <Text style={styles.errorText}>{errors.author}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Year published:</Text>
          <TextInput
            value={yearPublished}
            onChangeText={(text) => {
              setYearPublished(text);
              setErrors((prev) => ({ ...prev, yearPublished: "" }));
            }}
            keyboardType="numeric"
            style={styles.input}
          />
          {errors.yearPublished ? (
            <Text style={styles.errorText}>{errors.yearPublished}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Cover link:</Text>
          <TextInput
            value={cover}
            onChangeText={(text) => {
              setCover(text);
              setErrors((prev) => ({ ...prev, cover: "" }));
            }}
            style={styles.input}
          />
          {errors.cover ? (
            <Text style={styles.errorText}>{errors.cover}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Category:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => {
                setCategory(itemValue as Category);
                setErrors((prev) => ({ ...prev, category: "" }));
              }}
              style={styles.picker}
            >
              <Picker.Item label="Select a category" value={null} />
              {Object.values(Category).map((cat) => (
                <Picker.Item key={cat} label={cat} value={cat} />
              ))}
            </Picker>
          </View>
          {errors.category ? (
            <Text style={styles.errorText}>{errors.category}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Price (EUR):</Text>
          <TextInput
            value={price}
            onChangeText={(text) => {
              setPrice(text);
              setErrors((prev) => ({ ...prev, price: "" }));
            }}
            keyboardType="numeric"
            style={styles.input}
          />
          {errors.price ? (
            <Text style={styles.errorText}>{errors.price}</Text>
          ) : null}
        </View>

        <View style={styles.inputField}>
          <Text style={typography.label}>Have you read it?</Text>
          <View style={styles.radioGroup}>
            <View style={styles.radioOption}>
              <FontAwesome5
                name={isRead ? "check-circle" : "circle"}
                size={20}
                color={colors.tertiaryText}
                onPress={() => setIsRead(true)}
              />
              <Text style={typography.read}>Yes</Text>
            </View>
            <View style={styles.radioOption}>
              <FontAwesome5
                name={!isRead ? "check-circle" : "circle"}
                size={20}
                color={colors.tertiaryText}
                onPress={() => setIsRead(false)}
              />
              <Text style={typography.read}>No</Text>
            </View>
          </View>
        </View>

        <Pressable style={styles.submitButton} onPress={handleSave}>
          <Text style={typography.button}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(33, 62, 77, 0.7)",
  },
  formContainer: {
    backgroundColor: colors.secondaryBackground,
    width: "80%",
    padding: 40,
  },
  inputField: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.secondaryText,
    borderRadius: 10,
    width: "100%",
    padding: 10,
  },
  pickerContainer: {
    borderRadius: 10,
    backgroundColor: colors.secondaryText,
    height: 40,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  picker: {
    width: "100%",
    backgroundColor: colors.secondaryText,
  },
  pickerItem: {
    backgroundColor: colors.secondaryText,
  },
  radioGroup: {
    flexDirection: "row",
    gap: 40,
    paddingTop: 10,
  },
  radioOption: {
    flexDirection: "row",
    gap: 5,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: colors.buttonBackground,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginHorizontal: "auto",
  },
  errorText: {
    color: colors.warning,
    fontSize: 12,
    zIndex: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 1,
    right: 3,
  },
});
