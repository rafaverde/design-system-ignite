import { StoryObj, Meta } from "@storybook/react";

import {
  Button,
  Tooltip,
  TooltipProps,
  TooltipWrapper,
} from "@ignite-ui/react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "I'm a button with tooltip!",
    children: <Button>Hover me</Button>,
  },
  decorators: [(Story) => <TooltipWrapper>{Story()}</TooltipWrapper>],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
