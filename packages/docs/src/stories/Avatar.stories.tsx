import { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://github.com/rafaverde.png",
    alt: "Rafael Valverde",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
