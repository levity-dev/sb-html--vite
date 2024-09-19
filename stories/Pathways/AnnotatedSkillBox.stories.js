// AnnotatedSkillBox.js
import { AnnotatedSkillBox } from './AnnotatedSkillBox'

export default {
    title: 'Pathways/Annotated Skill Box Using Monospace Font',
    tags: ['autodocs'],
};

const Template = (args) => {
    return AnnotatedSkillBox(args);
};

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    description: {
      story: 'Requires the implementation of a monospace font to be added to the site.',
    },
  },
};