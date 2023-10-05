import { Meta } from '@storybook/react';
import ComplexCard from './ComplexCard';
import EcommerceCard from './EcommerceCard';
import FollowerCard from './FollowerCard';
import FriendCard from './FriendCard';
import GiftCard from './GiftCard';
import MusicCard from './MusicCard';
import ProfileCard from './ProfileCard';
import Settings from './Settings';
import UpcomingActivity from './UpcomingActivity';



export default {
    title: 'Cards Components',
} as Meta;

export const StoryComplexCard: React.FC = () => <ComplexCard />;
export const StoryEcommerceCard: React.FC = () => <EcommerceCard />;
export const StoryFollowerCard: React.FC = () => <FollowerCard />;
export const StoryFriendCard: React.FC = () => <FriendCard />;
export const StoryGiftCard: React.FC = () => <GiftCard />;
export const StoryMusicCard: React.FC = () => <MusicCard />;
export const StoryProfileCard: React.FC = () => <ProfileCard />;
export const StorySettings: React.FC = () => <Settings />;
export const StoryUpcomingActivity: React.FC = () => <UpcomingActivity />;
