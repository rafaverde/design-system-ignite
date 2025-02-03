import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicatorContainer } from "./styles";
import { ComponentProps } from "react";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicatorContainer asChild>
        <Check weight="bold" />
      </CheckboxIndicatorContainer>
    </CheckboxContainer>
  );
}

Checkbox.displayName = "Checkbox";
