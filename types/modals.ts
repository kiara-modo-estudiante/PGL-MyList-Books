export interface ConfirmationModalProps {
  visible: boolean;
  iconColor: string;
  message: string;
  subMessage: string;
  confirmText: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export interface DeleteListConfirmationProps {
  visible: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export interface DeleteBookConfirmationProps
  extends DeleteListConfirmationProps {
  title: string;
}
