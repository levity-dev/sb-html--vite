// InlineNumberBubble.js
export const InlineNumberBubble = ({
  numberColor = '#ffffff',
  bubbleBackgroundColor = '#804c8a',
  bubbleSize = '1.4em',
  strongText = 'Read the answers.',
  italicText = 'Then write a question with why for each answer.',
}) => {
  // Inline style for the span element
  const spanStyle = `color: ${numberColor}; background-color: ${bubbleBackgroundColor};  width: ${bubbleSize}; height: ${bubbleSize}; line-height: ${bubbleSize}; border-radius: 50%; text-align: center; margin-right: .5em; display: inline-block;`;

  // HTML template as a string
  return `
    <p><span style="${spanStyle}">
    <strong>2</strong></span><strong>${strongText}</strong> <em>${italicText}</em>
    </p>
  `;
};
