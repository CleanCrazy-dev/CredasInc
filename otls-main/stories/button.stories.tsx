import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const Button = (props: any) => {
  return (
    <button className="bg-primary text-white px-3 py-2 uppercase" type="button">
      Primary btn
    </button>
  );
};

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="p-8 h-52">
    <Button {...args} />
  </div>
);

export const button = Template.bind({});
button.args = {};
