import React from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import colors from "theme/color";
import typography from "theme/typography";
import { FontAwesome5 } from "@expo/vector-icons";
import { ConfirmationModalProps } from "@/types/modals";

const ConfirmationModal = ({
  visible,
  iconColor,
  message,
  subMessage,
  confirmText,
  onCancel,
  onConfirm,
}: ConfirmationModalProps) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <FontAwesome5
            name="exclamation-triangle"
            size={80}
            color={iconColor}
            style={styles.info}
          />
          <Text style={[typography.label, styles.info]}>{message}</Text>
          <Text style={[typography.label, styles.info]}>{subMessage}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={onCancel}
              style={[
                styles.button,
                { backgroundColor: colors.buttonBackground },
              ]}
            >
              <Text style={[typography.button, styles.buttonText]}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={onConfirm}
              style={[styles.button, { backgroundColor: iconColor }]}
            >
              <Text style={[typography.button, styles.buttonText]}>
                {confirmText}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;

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
    paddingHorizontal: 5,
    width: "48%",
    justifyContent: "center",
    borderRadius: "10%",
  },
  buttonText: {
    textAlign: "center",
  },
  info: {
    textAlign: "center",
    marginBottom: 10,
  },
});
