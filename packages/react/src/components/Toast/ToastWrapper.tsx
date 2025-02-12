import { ToastProvider, ToastViewport } from "@radix-ui/react-toast";
import React from "react";

interface ToastWrapperProps {
  duration?: number;
  children: React.ReactNode;
}

export function ToastWrapper({ duration = 5000, children }: ToastWrapperProps) {
  return (
    <ToastProvider duration={duration}>
      {children}
      <ToastViewport />
    </ToastProvider>
  );
}
