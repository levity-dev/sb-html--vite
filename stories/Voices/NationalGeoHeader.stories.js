// NationalGeoHeader.stories.js
import { NationalGeoHeader } from './NationalGeoHeader'

export default {
    title: 'Voices/National Geographic Explorer(s) Header',
    tags: ['autodocs'],
};

const Template = (args) => {
    return NationalGeoHeader(args);
};

export const Default = Template.bind({});

Default.parameters = {
    docs: {
        description: {
            story: 'Use whenever National Geographic Explorers banner is needed.'
        },
    },
};