import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "../../styles";

export const TooltipRoot = styled(Tooltip.Root, {});
export const TooltipTrigger = styled(Tooltip.Trigger, {});
export const TooltipPortal = styled(Tooltip.Portal, {});

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$md",
  color: "$gray100",
  fontFamily: "$default",
  fontSize: "$sm",
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: "$gray900",
});
