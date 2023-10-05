import { Meta, StoryObj } from '@storybook/react';
import Expence from './Expence';
import Growth from './Growth';
import MonthlyEarnings from './MonthlyEarnings';
import PaymentGateways from './PaymentGateways';
import ProductPerformances from './ProductPerformances';
import RecentTransactions from './RecentTransactions';
import RevenueUpdates from './RevenueUpdates';
import Sales from './Sales';
import SalesOverview from './SalesOverview';
import SalesTwo from './SalesTwo';
import WelcomeCard from './WelcomeCard';
import YearlySales from './YearlySales';

export default {
  title: 'Dashboard - Ecommerce Components',
} as Meta;

export const StoryPaymentGateways: React.FC = () => <PaymentGateways />;
export const StoryProductPerformances: React.FC = () => <ProductPerformances />;
export const StoryRecentTransactions: React.FC = () => <RecentTransactions />;
export const StoryWelcomeCard: React.FC = () => <WelcomeCard />;

type StoryExpence = StoryObj<typeof Expence>;

export const StoryExpence: StoryExpence = {
  render: Expence,
  args: {
    isLoading: false,
  },
};

type StoryGrowth = StoryObj<typeof Growth>;

export const StoryGrowth: StoryGrowth = {
  render: Growth,
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

type StoryRevenueUpdates = StoryObj<typeof RevenueUpdates>;

export const StoryRevenueUpdates: StoryRevenueUpdates = {
  render: RevenueUpdates,
  args: {
    isLoading: false,
  },
};

type StorySales = StoryObj<typeof Sales>;

export const StorySales: StorySales = {
  render: Sales,
  args: {
    isLoading: false,
  },
};

type StorySalesOverview = StoryObj<typeof SalesOverview>;

export const StorySalesOverview: StorySalesOverview = {
  render: SalesOverview,
  args: {
    isLoading: false,
  },
};

type StorySalesTwo = StoryObj<typeof SalesTwo>;

export const StorySalesTwo: StorySalesTwo = {
  render: SalesTwo,
  args: {
    isLoading: false,
  },
};

type StoryYearlySales = StoryObj<typeof YearlySales>;

export const StoryYearlySales: StoryYearlySales = {
  render: YearlySales,
  args: {
    isLoading: false,
  },
};
