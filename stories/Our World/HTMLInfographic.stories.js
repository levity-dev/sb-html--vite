// AnnotatedSkillBox.js
import { HTMLInfographic } from './HTMLInfographic'

export default {
    title: 'Our World/Full HTML Infographic Demo',
    tags: ['autodocs'],
};

const Template = (args) => {
    return HTMLInfographic(args);
};

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    description: {
      story: 'Full working demo of an elaborate infographic built entirely with HTML and CSS.',
    },
  },
};