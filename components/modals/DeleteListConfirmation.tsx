import React from "react";
import ConfirmationModal from "./ConfirmationModal";
import colors from "theme/color";
import { DeleteListConfirmationProps } from "@/types/modals";

const DeleteListConfirmation = ({
  visible,
  onCancel,
  onDelete,
}: DeleteListConfirmationProps) => {
  return (
    <ConfirmationModal
      visible={visible}
      iconColor={colors.delete}
      message="Are you sure you want to delete ALL BOOKS?"
      subMessage="This action can’t be reversed"
      confirmText="Delete All Books"
      onCancel={onCancel}
      onConfirm={onDelete}
    />
  );
};

export default DeleteListConfirmation;
