// HangingIndentWNumberBubble.stories.js
import "../doc-modify.css";

import { HangingIndentWNumberBubble } from "./HangingIndentWNumberBubble";

// Storybook configuration for HTML
export default {
  title: "Our World/Number Bubble with Hanging Indent Paragraph",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

// Template for HangingIndentWNumberBubble stories
const Template = (args) => {
  // Generate HTML string from component
  return HangingIndentWNumberBubble(args);
};

// Default story
export const Default = Template.bind({});
Default.args = {
  numberColor: "#ffffff",
  bubbleBackgroundColor: "#804c8a",
  bubbleSize: "1.4em",
  strongText: "Read the answers.",
  additionalText:
    "Then write a question with why for each answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non mi faucibus, commodo felis non, imperdiet arcu. Ut ullamcorper lacus enim, vitae feugiat massa volutpat ullamcorper. Fusce eros ante, efficitur sed enim id, congue tincidunt ipsum.",
};
