import { Meta } from '@storybook/react';
import ControlsList from './ControlsList';
import FolderList from './FolderList';
import NestedList from './NestedList';
import SelectedList from './SelectedList';
import SimpleList from './SimpleList';
import SwitchList from './SwitchList';


export default {
    title: 'Lists Components',
} as Meta;

export const StoryControlsList: React.FC = () => <ControlsList />;
export const StoryFolderList: React.FC = () => <FolderList />;
export const StoryNestedList: React.FC = () => <NestedList />;
export const StorySelectedList: React.FC = () => <SelectedList />;
export const StorySimpleList: React.FC = () => <SimpleList />;
export const StorySwitchList: React.FC = () => <SwitchList />;
