export interface ConfirmationModalProps {
  visible: boolean;
  iconColor: string;
  message: string;
  subMessage: string;
  confirmText: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export interface DeleteListConfirmation {
  visible: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export interface DeleteBookConfirmation extends DeleteListConfirmation {
  title: string;
}
