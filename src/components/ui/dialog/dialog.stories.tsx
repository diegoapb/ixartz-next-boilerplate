import { Meta } from '@storybook/react';
import AlertDialog from './AlertDialog';
import FormDialog from './FormDialog';
import FullscreenDialog from './FullscreenDialog';
import MaxWidthDialog from './MaxWidthDialog';
import ResponsiveDialog from './ResponsiveDialog';
import ScrollContentDialog from './ScrollContentDialog';
import SimpleDialog from './SimpleDialog';
import TransitionDialog from './TransitionDialog';

export default {
    title: 'Dialog Components',
} as Meta;

export const StoryAlertDialog: React.FC = () => <AlertDialog />;
export const StoryFormDialog: React.FC = () => <FormDialog />;
export const StoryFullscreenDialog: React.FC = () => <FullscreenDialog />;
export const StoryMaxWidthDialog: React.FC = () => <MaxWidthDialog />;
export const StoryResponsiveDialog: React.FC = () => <ResponsiveDialog />;
export const StoryScrollContentDialog: React.FC = () => <ScrollContentDialog />;
export const StorySimpleDialog: React.FC = () => <SimpleDialog />;
export const StoryTransitionDialog: React.FC = () => <TransitionDialog />;