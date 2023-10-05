import { Meta } from '@storybook/react';
import CustomersCard from './CustomersCard';
import EmployeeSalaryCard from './EmployeeSalaryCard';
import ExpanceCard from './ExpanceCard';
import GrowthCard from './GrowthCard';
import MonthlyEarningsCard from './MonthlyEarningsCard';
import MonthlyEarningsTwoCard from './MonthlyEarningsTwoCard';
import ProjectCard from './ProjectCard';
import RevenueUpdatesCard from './RevenueUpdatesCard';
import RevenueUpdatesTwoCard from './RevenueUpdatesTwoCard';
import SalesCard from './SalesCard';
import SalesOverviewCard from './SalesOverviewCard';
import SalesTwoCard from './SalesTwoCard';
import WeeklyStats from './WeeklyStats';
import YearlyBreakupCard from './YearlyBreakupCard';
import YearlySalesCard from './YearlySalesCard';


export default {
    title: 'Dashboard - Skeleton Components',
} as Meta;

export const StoryCustomersCard: React.FC = () => <CustomersCard />;
export const StoryEmployeeSalaryCard: React.FC = () => <EmployeeSalaryCard />;
export const StoryExpanceCard: React.FC = () => <ExpanceCard />;
export const StoryGrowthCard: React.FC = () => <GrowthCard />;
export const StoryMonthlyEarningsCard: React.FC = () => <MonthlyEarningsCard />;
export const StoryMonthlyEarningsTwoCard: React.FC = () => <MonthlyEarningsTwoCard />;
export const StoryProjectCard: React.FC = () => <ProjectCard />;
export const StoryRevenueUpdatesCard: React.FC = () => <RevenueUpdatesCard />;
export const StoryRevenueUpdatesTwoCard: React.FC = () => <RevenueUpdatesTwoCard />;
export const StorySalesCard: React.FC = () => <SalesCard />;
export const StorySalesOverviewCard: React.FC = () => <SalesOverviewCard />;
export const StorySalesTwoCard: React.FC = () => <SalesTwoCard />;
export const StoryWeeklyStats: React.FC = () => <WeeklyStats />;
export const StoryYearlyBreakupCard: React.FC = () => <YearlyBreakupCard />;
export const StoryYearlySalesCard: React.FC = () => <YearlySalesCard />;
