import Button from "./Button";

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default {
  title: "Button",
  component: Button,
  args: { children: "้ไฟกใใ", onClick: () => alert("clicked!") },
} as ComponentMeta<T>;

export const Default: Story = {};
