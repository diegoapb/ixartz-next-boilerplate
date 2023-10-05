import { Meta } from '@storybook/react';
import BasicTransferList from './BasicTransferList';
import EnhancedTransferList from './EnhancedTransferList';


export default {
    title: 'Transfer List Components',
} as Meta;

export const StoryBasicTransferList: React.FC = () => <BasicTransferList />;
export const StoryEnhancedTransferList: React.FC = () => <EnhancedTransferList />;
