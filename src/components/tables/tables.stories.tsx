import { Meta } from '@storybook/react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import Table5 from './Table5';


export default {
    title: 'Tables Components',
} as Meta;

export const StoryTable1: React.FC = () => <Table1 />;
export const StoryTable2: React.FC = () => <Table2 />;
export const StoryTable3: React.FC = () => <Table3 />;
export const StoryTable4: React.FC = () => <Table4 />;
export const StoryTable5: React.FC = () => <Table5 />;

