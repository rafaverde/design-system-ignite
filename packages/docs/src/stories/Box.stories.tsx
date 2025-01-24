import { StoryObj, Meta } from "@storybook/react";

import { Box, BoxProps, Text } from "@ignite-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Testando <strong>elemento </strong>box.
        </Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
