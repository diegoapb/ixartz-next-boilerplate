import { Meta } from '@storybook/react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Banner4 from './Banner4';
import Banner5 from './Banner5';


export default {
    title: 'Banners Components',
} as Meta;

export const StoryBanner1: React.FC = () => <Banner1 />;
export const StoryBanner2: React.FC = () => <Banner2 />;
export const StoryBanner3: React.FC = () => <Banner3 />;
export const StoryBanner4: React.FC = () => <Banner4 />;
export const StoryBanner5: React.FC = () => <Banner5 />;

