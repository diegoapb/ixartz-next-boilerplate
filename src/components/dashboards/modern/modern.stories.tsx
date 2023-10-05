import { Meta, StoryObj } from '@storybook/react';
import Customers from './Customers';
import EmployeeSalary from './EmployeeSalary';
import MonthlyEarnings from './MonthlyEarnings';
import Projects from './Projects';
import RevenueUpdates from './RevenueUpdates';
import SellingProducts from './SellingProducts';
import Social from './Social';
import TopCards from './TopCards';
import TopPerformers from './TopPerformers';
import WeeklyStats from './WeeklyStats';
import YearlyBreakup from './YearlyBreakup';

export default {
  title: 'Dashboard - Modern Components',
} as Meta;

export const StorySellingProducts: React.FC = () => <SellingProducts />;
export const StorySocial: React.FC = () => <Social />;
export const StoryTopCards: React.FC = () => <TopCards />;
export const StoryTopPerformers: React.FC = () => <TopPerformers />;

type StoryCustomers = StoryObj<typeof Customers>;

export const StoryCustomers: StoryCustomers = {
  render: Customers,
  args: {
    isLoading: false,
  },
};

type StoryEmployeeSalary = StoryObj<typeof EmployeeSalary>;

export const StoryEmployeeSalary: StoryEmployeeSalary = {
  render: EmployeeSalary,
  args: {
    isLoading: false,
  },
};

type StoryMonthlyEarnings = StoryObj<typeof MonthlyEarnings>;

export const StoryMonthlyEarnings: StoryMonthlyEarnings = {
  render: MonthlyEarnings,
  args: {
    isLoading: false,
  },
};

type StoryProjects = StoryObj<typeof Projects>;

export const StoryProjects: StoryProjects = {
  render: Projects,
  args: {
    isLoading: false,
  },
};

type StoryRevenueUpdates = StoryObj<typeof RevenueUpdates>;

export const StoryRevenueUpdates: StoryRevenueUpdates = {
  render: RevenueUpdates,
  args: {
    isLoading: false,
  },
};





type StoryWeeklyStats = StoryObj<typeof WeeklyStats>;

export const StoryWeeklyStats: StoryWeeklyStats = {
  render: WeeklyStats,
  args: {
    isLoading: false,
  },
};

type StoryYearlyBreakup = StoryObj<typeof YearlyBreakup>;

export const StoryYearlyBreakup: StoryYearlyBreakup = {
  render: YearlyBreakup,
  args: {
    isLoading: false,
  },
};
