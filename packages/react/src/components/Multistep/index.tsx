import { Label, MultistepContainer, Step, Steps } from "./styles";

export interface MultistepProps {
  steps: number;
  currentStep: number;
}

export function Multistep({ steps, currentStep = 1 }: MultistepProps) {
  return (
    <MultistepContainer>
      <Label>
        Passo {currentStep} de {steps}
      </Label>

      <Steps css={{ "--steps-size": steps }}>
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step}></Step>;
        })}
      </Steps>
    </MultistepContainer>
  );
}

Multistep.displayName = "Multistep";
