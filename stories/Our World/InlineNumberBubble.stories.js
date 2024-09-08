// InlineNumberBubble.stories.js
import { InlineNumberBubble } from "./InlineNumberBubble";

// Storybook configuration for HTML
export default {
  title: "Our World/Inline Number Bubble",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

// Template for InlineNumberBubble stories
const Template = (args) => {
  // Generate HTML string from component
  return InlineNumberBubble(args);
};

// Default story
export const Default = Template.bind({});
Default.args = {
  numberColor: "#ffffff",
  bubbleBackgroundColor: "#804c8a",
  bubbleSize: "1.4em",
  strongText: "Read the answers.",
  italicText: "Then write a question with why for each answer.",
};
