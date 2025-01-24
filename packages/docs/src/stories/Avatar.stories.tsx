import { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/rafaverde.png",
    alt: "Rafael Valverde",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
