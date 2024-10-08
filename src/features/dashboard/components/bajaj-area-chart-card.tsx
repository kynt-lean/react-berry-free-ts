import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ApexCharts from 'apexcharts';
import { useEffect } from 'react';
import Chart, { Props as ApexChartProps } from 'react-apexcharts';
import { BerryTheme } from '../../../themes/model';
import { useCustomization } from '../../../themes/selectors';
import { chartData } from '../chart-data/bajaj-area-chart';

export const BajajAreaChartCard = () => {
  const theme = useTheme<BerryTheme>();
  const orangeDark = theme.palette.secondary[800];
  const customization = useCustomization();
  const { navType } = customization;

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: { theme: 'light' }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [navType, orangeDark]);

  return (
    <Card sx={{ bgcolor: 'secondary.light' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: 'secondary.dark' }}>
                Bajaj Finery
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: 'grey.800' }}>
                $1839.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ color: 'grey.800' }}>
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      <Chart {...(chartData as ApexChartProps)} />
    </Card>
  );
};
