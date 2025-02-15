import {
  TooltipPortal,
  TooltipArrow,
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from "./styles";

export interface TooltipProps {
  content: string;
  children: React.ReactElement;
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipPortal>
        <TooltipContent sideOffset={4}>
          {content}

          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  );
}
