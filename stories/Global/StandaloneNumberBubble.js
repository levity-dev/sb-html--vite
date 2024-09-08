// StandaloneNumberBubble.js
export const StandaloneNumberBubble = ({
    numberColor = '#ffffff',
    bubbleBackgroundColor = '#0088ff',
    bubbleSize = '1.4em',
    numberFontSize = ``,
}) => {
    const styleProperties = [
    `color: ${numberColor}; background-color: ${bubbleBackgroundColor}; width: ${bubbleSize}; height: ${bubbleSize}; line-height: ${bubbleSize}; border-radius: 50%; text-align: center; display: inline-block;`];

    if (numberFontSize) {
        styleProperties.push(`    font-size: ${numberFontSize} !important;`);
    }

    const divStyle = styleProperties.join('');

    return `
        <div style="${divStyle}">
            <strong>2</strong>
        </div>
    `;
};