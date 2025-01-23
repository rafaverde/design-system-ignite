import { styled } from "../styles";
import { ComponentProps } from "react";

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  color: "$white",
  fontFamily: "$default",
});

export interface BoxProps extends ComponentProps<typeof Box> {}
