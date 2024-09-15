import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { EarningCard } from '../../../features/dashboard/components/earning-card';
import { PopularCard } from '../../../features/dashboard/components/popular-card';
import { TotalGrowthBarChart } from '../../../features/dashboard/components/total-growth-bar-chart';
import { TotalIncomeDarkCard } from '../../../features/dashboard/components/total-income-dark-card';
import { TotalIncomeLightCard } from '../../../features/dashboard/components/total-income-light-card';
import { TotalOrderLineChartCard } from '../../../features/dashboard/components/total-order-line-chart-card';
import { useGridSpacing } from '../../../themes/hook';

export const Dashboard = () => {
  const gridSpacing = useGridSpacing();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
