import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { Stack } from '@mui/system';

const Followers = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 90,
      sparkline: {
        enabled: true,
      },
    },
    colors: [primary],

    stroke: {
      curve: 'straight',
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [0, 150, 110, 240, 200, 200, 300, 200],
    },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h4">2,545</Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="subtitle2" color="textSecondary">
            Followers
          </Typography>
          <Typography variant="subtitle2" color="success.main">
            +1.20%
          </Typography>
        </Stack>
      </CardContent>
      <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="90px" width={"100%"}/>
    </BlankCard>
  );
};

export default Followers;
