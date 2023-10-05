import { Meta } from '@storybook/react';
import CurrentValue from './CurrentValue';
import Earned from './Earned';
import Followers from './Followers';
import MostVisited from './MostVisited';
import PageImpressions from './PageImpressions';
import Views from './Views';



export default {
    title: 'Charts Components',
} as Meta;

export const StoryCurrentValue: React.FC = () => <CurrentValue />;
export const StoryEarned: React.FC = () => <Earned />;
export const StoryFollowers: React.FC = () => <Followers />;
export const StoryMostVisited: React.FC = () => <MostVisited />;
export const StoryPageImpressions: React.FC = () => <PageImpressions />;
export const StoryViews: React.FC = () => <Views />;
