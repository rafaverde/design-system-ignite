import { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eum commodi ducimus, nesciunt doloribus blanditiis molestias modi dolorum voluptate, aliquam ipsa iure debitis ex rem fuga numquam, accusamus voluptates ut?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children:
      "Strong text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    as: "strong",
  },
};
