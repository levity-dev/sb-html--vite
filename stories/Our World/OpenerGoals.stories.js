// OpenerGoals.stories.js

import { OpenerGoals } from "./OpenerGoals";

export default {
  title: "Our World/Opener with Goals Overlay",
  tags: ["autodocs"],
  decorators: [],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "select the RGBA value of the goals box, including opacity.",
    },
    goalTextColor: {
      control: "color",
      description: "Select the text color if a dark background is needed",
    },
    position: {
      control: { type: "select" },
      options: ["top left", "top right", "bottom right", "bottom left"],
      description: "Choose the corner for the goals box. Unit title will move if top left is selected."
    },
    unitLabel: { control: "text",
     },
    unitTitle: { control: "text" },
    offset: { control: "text",
        description: 'adjust box distance from image.'
     },
  },
};

const Template = (args) => {
  return OpenerGoals(args);
};

export const Default = Template.bind({});
(Default.parameters = {
  docs: {
    description: {
      story:
        '<p>Scroll down to select and view options.</p> <p>Click "show code" to view the code snippet and after selecting desired styles, <strong>click "copy code" to grab the snippet.</strong>',
    },
  },
}),
  (Default.args = {
    position: "bottom left",
    backgroundColor: "rgba(196, 226, 172, .9)",
    goalTextColor: "",
    offset: "1%",
    unitLabel: "Unit 5",
    unitTitle: "Animal Habitats",
  });