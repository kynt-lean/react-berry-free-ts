import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import NavigationScroll from './layout/NavigationScroll';
import router from './routes';
import { RootState } from './store/reducer';
import themes from './themes';
import { BerryThemeCustomization } from './themes/theme';

const App = () => {
  const customization = useSelector<RootState, BerryThemeCustomization>((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <RouterProvider router={router} />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
