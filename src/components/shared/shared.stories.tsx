import { Meta } from '@storybook/react';
import AppCard from './AppCard';
import BaseCard from './BaseCard';
import BlankCard from './BlankCard';
import ChildCard from './ChildCard';
import DashboardCard from './DashboardCard';
import DashboardWidgetCard from './DashboardWidgetCard';
import InlineItemCard from './InlineItemCard';
import ParentCard from './ParentCard';
import ScrollToTop from './ScrollToTop';
import ThreeColumn from './ThreeColumn';

export default {
    title: 'Shared Components',
} as Meta;

export const StoryAppCard: React.FC = () => <AppCard ><></></AppCard>;
export const StoryBaseCard: React.FC = () => <BaseCard title='BaseCard'><></></BaseCard>;
export const StoryBlankCard: React.FC = () => <BlankCard ><></></BlankCard>;
export const StoryChildCard: React.FC = () => <ChildCard ><></></ChildCard>;
export const StoryDashboardCard: React.FC = () => <DashboardCard ><></></DashboardCard>;
export const StoryDashboardWidgetCard: React.FC = () => <DashboardWidgetCard title="title" subtitle="subtitle" dataLabel1="dataLabel1" dataItem1="dataItem1" dataLabel2="dataLabel2" dataItem2="dataItem2" ><></></DashboardWidgetCard>;
export const StoryInlineItemCard: React.FC = () => <InlineItemCard ><></></InlineItemCard>;
export const StoryParentCard: React.FC = () => <ParentCard title='Title' ><></></ParentCard>;
export const StoryScrollToTop: React.FC = () => <ScrollToTop ><></></ScrollToTop>;
export const StoryThreeColumn: React.FC = () => <ThreeColumn leftChild={<></>} middleChild={<></>} rightChild={<></>}></ThreeColumn>;
