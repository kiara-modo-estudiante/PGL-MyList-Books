import typography from "@/theme/typography";
import { BookType, Category } from "@/types/book";
import { useState } from "react";
import uuid from "react-native-uuid";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "@/theme/color";
import { isValidYear } from "@/utils/valid-book";

export default function Modal() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [cover, setCover] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const [price, setPrice] = useState("");
  const [isRead, setIsRead] = useState(false);

  const handleSave = () => {
    const newBook: BookType = {
      id: uuid.v4(),
      title,
      author,
      yearPublished: parseInt(yearPublished, 10),
      cover: { uri: cover },
      category: category as Category,
      price: parseFloat(price),
      isRead,
    };

    setTitle("");
    setAuthor("");
    setYearPublished("");
    setCover("");
    setCategory(null);
    setPrice("");
    setIsRead(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputField}>
          <Text style={typography.label}>Title:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Author:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Year published:</Text>
          <TextInput keyboardType="numeric" style={styles.input}></TextInput>
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Cover link:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Category:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue as Category)}
              style={styles.picker}
            >
              <Picker.Item label="Select a category" value={null} />
              {Object.values(Category).map((cat) => (
                <Picker.Item
                  key={cat}
                  label={cat}
                  value={cat}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={typography.label}>Price (EUR):</Text>
          <TextInput keyboardType="numeric" style={styles.input}></TextInput>
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
          <Text style={styles.submitButtonText}>Submit</Text>
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
    height: "70%",
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
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
