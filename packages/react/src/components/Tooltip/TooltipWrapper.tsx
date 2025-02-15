import { TooltipProvider } from "@radix-ui/react-tooltip";

interface TooltipWrapperProps {
  children: React.ReactNode;
}

export function TooltipWrapper({ children }: TooltipWrapperProps) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
