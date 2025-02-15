import { StoryObj, Meta } from "@storybook/react";

import { Button, Toast, ToastProps, ToastWrapper } from "@ignite-ui/react";

import { useState } from "react";

export default {
  title: "Data Display/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    open: false,
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
  argTypes: {
    duration: {
      control: {
        type: "number",
      },
    },
  },
  decorators: [(Story) => <ToastWrapper>{Story()}</ToastWrapper>],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {
    open: false,
    duration: 5000,
  },

  render: (args: ToastProps) => {
    const [open, setOpen] = useState(args.open);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>

        <Toast {...args} open={open} onOpenChange={setOpen} />
      </>
    );
  },
};
