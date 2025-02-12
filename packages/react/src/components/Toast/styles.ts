import * as Toast from "@radix-ui/react-toast";
import { styled } from "../../styles";
import { keyframes } from "@stitches/react";

const slideIn = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const slideOut = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(100%)" },
});

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: "$gray800",
  borderRadius: "$sm",
  border: "1px solid $gray600",

  padding: "$3 $20 $3 $5",
  position: "absolute",
  bottom: "$4",
  right: "$4",
  width: "max-content",

  display: "flex",
  flexDirection: "column",
  gap: "$1",

  fontFamily: "$default",

  "&[data-state='open']": {
    animation: `${slideIn} 200ms ease-out`,
  },

  "&[data-state='closed']": {
    animation: `${slideOut} 200ms ease-in`,
  },
});

export const ToastTitle = styled(Toast.Title, {
  color: "$white",
  fontSize: "$xl",
  fontWeight: "$bold",
  lineHeight: "$base",
});

export const ToastDescription = styled(Toast.Description, {
  color: "$gray200",
  fontSize: "$sm",
  lineHeight: "$base",
});

export const ToastClose = styled(Toast.Close, {
  position: "absolute",
  top: "$3",
  right: "$3",
  cursor: "pointer",
  color: "$gray200",
  fontSize: "$xl",
  padding: "$1",

  border: "none",
  backgroundColor: "transparent",

  transition: "color 0.2s",

  "&:hover": {
    color: "$gray400",
  },
});
