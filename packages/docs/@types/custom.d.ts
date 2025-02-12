declare module "@radix-ui/react-toast" {
  import { ComponentProps } from "react";

  export interface ToastProviderProps extends ComponentProps<"div"> {}

  export function ToastProvider(props: ToastProviderProps): JSX.Element;

  export interface ToastProps extends ComponentProps<"div"> {
    title: string;
    description: string;
  }

  export function Toast(props: ToastProps): JSX.Element;
}
