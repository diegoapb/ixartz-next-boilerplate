import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';

import DashboardCard from '../../shared/DashboardCard';
import SkeletonMonthlyEarningsTwoCard from "../skeleton/MonthlyEarningsTwoCard";

interface MonthlyearningsCardProps {
  isLoading: boolean;
}

const MonthlyEarnings = ({ isLoading }: MonthlyearningsCardProps) => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const errorlight = theme.palette.error.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      color: secondary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  return (
    <>
      {
        isLoading ? (
          <SkeletonMonthlyEarningsTwoCard />
        ) : (
          <DashboardCard
            title="Monthly Earnings"
            action={
              <Fab color="secondary" size="medium">
                <IconCurrencyDollar width={24} />
              </Fab>
            }
            footer={
              <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height={60} width={"100%"} />
            }
          >
            <>
              <Typography variant="h3" fontWeight="700" mt="-20px">
                $6,820
              </Typography>
              <Stack direction="row" spacing={1} my={1} alignItems="center">
                <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
                  <IconArrowDownRight width={20} color="#FA896B" />
                </Avatar>
                <Typography variant="subtitle2" fontWeight="600">
                  +9%
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  last year
                </Typography>
              </Stack>
            </>
          </DashboardCard>
        )}
    </>
  );
};

export default MonthlyEarnings;
