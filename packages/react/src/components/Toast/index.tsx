import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from "./styles";
import { X } from "@phosphor-icons/react";

export interface ToastProps
  extends React.ComponentProps<typeof ToastContainer> {
  title: string;
  description: string;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
}

export function Toast({
  title,
  description,
  open,
  onOpenChange,
  ...props
}: ToastProps) {
  return (
    <ToastContainer open={open} onOpenChange={onOpenChange} {...props}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      <ToastClose>
        <X />
      </ToastClose>
    </ToastContainer>
  );
}

Toast.displayName = "Toast";
