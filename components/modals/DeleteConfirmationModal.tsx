import React from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import colors from "theme/color";
import typography from "theme/typography";
import { FontAwesome5 } from "@expo/vector-icons";
import { DeleteConfirmationModalProps } from "@/types/book";

/**
 * A modal component to confirm the deletion of an item.
 *
 * @param visible - Whether the modal is visible.
 * @param title - The title of the item to be deleted.
 * @param onCancel - Function to call when the cancel button is pressed.
 * @param onDelete - Function to call when the delete button is pressed.
 */
const DeleteConfirmationModal = ({
  visible,
  title,
  onCancel,
  onDelete,
}: DeleteConfirmationModalProps) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <FontAwesome5
            name="exclamation-triangle"
            size={80}
            color={colors.delete}
            style={styles.info}
          />
          <Text style={[typography.label, styles.info]}>
            Are you sure you want to delete “{title}”?
          </Text>
          <Text style={[typography.label, styles.info]}>
            This action can’t be reversed
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={onCancel}
              style={[
                styles.button,
                { backgroundColor: colors.buttonBackground },
              ]}
            >
              <Text style={typography.button}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={onDelete}
              style={[styles.button, { backgroundColor: colors.delete }]}
            >
              <Text style={typography.button}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteConfirmationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(33, 62, 77, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: colors.secondaryBackground,
    padding: 30,
    borderRadius: 10,
    width: "80%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    textAlign: "center",
    borderRadius: "10%",
  },
  info: {
    textAlign: "center",
    marginBottom: 10,
  },
});
