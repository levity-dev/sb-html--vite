// StandaloneNumberBubble.stories.js
import { StandaloneNumberBubble } from './StandaloneNumberBubble';

export default {
    title: 'Global/Standalone Number Bubble',
    tags: ['autodocs'],
    parameters: {
        layout: `centered`,
    }
};

const Template = (args) => {
    return StandaloneNumberBubble(args);
};

export const Default = Template.bind({});
Default.args = {
    numberColor: '#ffffff',
    bubbleBackgroundColor:'#0088ff',
    bubbleSize: '1.4em',
    numberFontSize: ``,

};