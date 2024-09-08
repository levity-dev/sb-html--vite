// ReadingSkillBox.Stories.js
import { ReadingSkillBox } from './ReadingSkillBox'

export default {
    title: 'Voices/Reading Skill Box',
    tags: ['autodocs'],
};

const Template = (args) => {
    return ReadingSkillBox(args);
};

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    description: {
      story: 'Standard Reading Skill Box Template.',
    },
  },
};