import React from "react";
import ConfirmationModal from "./ConfirmationModal";
import colors from "theme/color";
import { DeleteBookConfirmationProps } from "@/types/modals";

/**
 * A modal component to confirm the deletion of an item.
 *
 * @param visible - Whether the modal is visible.
 * @param title - The title of the item to be deleted.
 * @param onCancel - Function to call when the cancel button is pressed.
 * @param onDelete - Function to call when the delete button is pressed.
 */
const DeleteBookConfirmation = ({
  visible,
  title,
  onCancel,
  onDelete,
}: DeleteBookConfirmationProps) => {
  return (
    <ConfirmationModal
      visible={visible}
      iconColor={colors.delete}
      message={`Are you sure you want to delete “${title}”?`}
      subMessage="This action can’t be reversed"
      confirmText="Delete"
      onCancel={onCancel}
      onConfirm={onDelete}
    />
  );
};

export default DeleteBookConfirmation;
