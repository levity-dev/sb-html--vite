// HangingIndentWNumberBubble.js
export const HangingIndentWNumberBubble = ({
  numberColor = "#ffffff",
  bubbleBackgroundColor = "#804c8a",
  bubbleSize = "1.4em",
  strongText = "Read the answers.",
  additionalText = "Then write a question with why for each answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non mi faucibus, commodo felis non, imperdiet arcu. Ut ullamcorper lacus enim, vitae feugiat massa volutpat ullamcorper. Fusce eros ante, efficitur sed enim id, congue tincidunt ipsum.",
}) => {
  // Inline style for the span element
  const spanStyle = `text-indent:0; margin-right: .5em; color: ${numberColor}; background-color: ${bubbleBackgroundColor};  width: ${bubbleSize}; height: ${bubbleSize}; line-height: ${bubbleSize}; border-radius: 50%; text-align: center; display: inline-block;`;

  // HTML template as a string
  return `
    <p style="text-indent:calc(-${bubbleSize} - .5em); margin-left: calc(${bubbleSize} + .5em);"><span style="${spanStyle}">
    <strong>2</strong></span><strong>${strongText}</strong>${additionalText}</span>
    </p>
  `;
};
