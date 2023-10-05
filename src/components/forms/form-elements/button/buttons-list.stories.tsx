import { Meta } from '@storybook/react';
import ColorButtonGroup from './ColorButtonGroup';
import ColorButtons from './ColorButtons';
import DefaultButtonGroup from './DefaultButtonGroup';
import DefaultButtons from './DefaultButtons';
import FabColorButtons from './FabColorButtons';
import FabDefaultButton from './FabDefaultButton';
import FabSizeButtons from './FabSizeButtons';
import IconColorButtons from './IconColorButtons';
import IconLoadingButtons from './IconLoadingButtons';
import IconSizeButtons from './IconSizeButtons';
import OutlinedColorButtons from './OutlinedColorButtons';
import OutlinedIconButtons from './OutlinedIconButtons';
import OutlinedSizeButton from './OutlinedSizeButton';
import SizeButton from './SizeButton';
import SizeButtonGroup from './SizeButtonGroup';
import TextButtonGroup from './TextButtonGroup';
import TextColorButtons from './TextColorButtons';
import TextDefaultButtons from './TextDefaultButtons';
import TextIconButtons from './TextIconButtons';
import TextSizeButton from './TextSizeButton';
import VerticalButtonGroup from './VerticalButtonGroup';


export default {
    title: 'Buttons Components',
} as Meta;



export const StoryColorButtonGroup: React.FC = () => <ColorButtonGroup />;
export const StoryColorButtons: React.FC = () => <ColorButtons />;
export const StoryDefaultButtonGroup: React.FC = () => <DefaultButtonGroup />;
export const StoryDefaultButtons: React.FC = () => <DefaultButtons />;
export const StoryFabColorButtons: React.FC = () => <FabColorButtons />;
export const StoryFabDefaultButton: React.FC = () => <FabDefaultButton />;
export const StoryFabSizeButtons: React.FC = () => <FabSizeButtons />;
export const StoryIconColorButtons: React.FC = () => <IconColorButtons />;
export const StoryIconLoadingButtons: React.FC = () => <IconLoadingButtons />;
export const StoryIconSizeButtons: React.FC = () => <IconSizeButtons />;
export const StoryOutlinedColorButtons: React.FC = () => <OutlinedColorButtons />;
export const StoryOutlinedIconButtons: React.FC = () => <OutlinedIconButtons />;
export const StoryOutlinedSizeButton: React.FC = () => <OutlinedSizeButton />;
export const StorySizeButton: React.FC = () => <SizeButton />;
export const StorySizeButtonGroup: React.FC = () => <SizeButtonGroup />;
export const StoryTextButtonGroup: React.FC = () => <TextButtonGroup />;
export const StoryTextColorButtons: React.FC = () => <TextColorButtons />;
export const StoryTextDefaultButtons: React.FC = () => <TextDefaultButtons />;
export const StoryTextIconButtons: React.FC = () => <TextIconButtons />;
export const StoryTextSizeButton: React.FC = () => <TextSizeButton />;
export const StoryVerticalButtonGroup: React.FC = () => <VerticalButtonGroup />;
