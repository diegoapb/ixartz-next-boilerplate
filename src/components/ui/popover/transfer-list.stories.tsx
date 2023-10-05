import { Meta } from '@storybook/react';
import ClickPopover from './ClickPopover';
import HoverPopover from './HoverPopover';


export default {
    title: 'Popover Components',
} as Meta;

export const StoryClickPopover: React.FC = () => <ClickPopover />;
export const StoryHoverPopover: React.FC = () => <HoverPopover />;
