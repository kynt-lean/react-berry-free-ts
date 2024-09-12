import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Box from '@mui/material/Box';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { SxProps, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { IconChevronRight, IconTallymark1 } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigation from '../../menu-items';

// ==============================|| BREADCRUMBS TITLE ||============================== //
interface BTitleProps {
  title: string | React.ReactNode;
}

const BTitle: React.FC<BTitleProps> = ({ title }) => {
  return (
    <Grid item>
      <Typography variant="h3" sx={{ fontWeight: 500 }}>
        {title}
      </Typography>
    </Grid>
  );
};

BTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

// ==============================|| BREADCRUMBS ||============================== //
type BreadcrumbLink = {
  to?: string;
  title: string;
  icon?: React.ElementType;
};

type BreadcrumbsProps = {
  sx?: SxProps;
  custom?: boolean;
  heading?: string;
  card?: boolean;
  divider?: boolean;
  icon?: boolean;
  icons?: boolean;
  maxItems?: number;
  navigation?: {
    items?: {
      type: string;
      url?: string;
      title: string;
      icon?: React.ElementType;
      breadcrumbs?: boolean;
      children?: any[];
    }[];
  };
  rightAlign?: boolean;
  separator?: React.ElementType;
  title?: boolean;
  titleBottom?: boolean;
  links?: BreadcrumbLink[];
  [key: string]: any;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  card = false,
  custom = false,
  divider = false,
  heading,
  icon = true,
  icons,
  links,
  maxItems = 8,
  rightAlign = true,
  separator = IconChevronRight,
  title = true,
  titleBottom,
  sx,
  ...others
}) => {
  const theme = useTheme();
  const location = useLocation();
  const [main, setMain] = useState<any>();
  const [item, setItem] = useState<any>();

  const iconSX = {
    marginRight: 6,
    marginTop: -2,
    width: '1rem',
    height: '1rem',
    color: theme.palette.secondary.main
  };

  const linkSX = {
    display: 'flex',
    color: 'grey.900',
    textDecoration: 'none',
    alignContent: 'center',
    alignItems: 'center'
  };

  let customLocation = location.pathname;

  useEffect(() => {
    navigation?.items?.forEach((menu) => {
      if (menu.type === 'group') {
        if (menu.url === customLocation) {
          setMain(menu);
          setItem(menu);
        } else {
          getCollapse(menu);
        }
      }
    });
  }, [customLocation, navigation]);

  const getCollapse = (menu: any) => {
    if (!custom && menu.children) {
      menu.children.forEach((collapse: any) => {
        if (collapse.type === 'collapse') {
          getCollapse(collapse);
          if (collapse.url === customLocation) {
            setMain(collapse);
            setItem(collapse);
          }
        } else if (collapse.type === 'item' && collapse.url === customLocation) {
          setMain(menu);
          setItem(collapse);
        }
      });
    }
  };

  const SeparatorIcon = separator;
  const separatorIcon = separator ? <SeparatorIcon stroke={1.5} size="16px" /> : <IconTallymark1 stroke={1.5} size="16px" />;

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';

  if (main?.type === 'collapse') {
    const CollapseIcon = main.icon || AccountTreeTwoToneIcon;
    mainContent = (
      <Typography
        {...(main.url && { component: Link, to: main.url })}
        variant="subtitle1"
        sx={linkSX}
        color={window.location.pathname === main.url ? 'text.primary' : 'text.secondary'}
      >
        {icons && <CollapseIcon style={iconSX} />}
        {main.title}
      </Typography>
    );
  }

  if (!custom && main?.type === 'collapse' && main.breadcrumbs) {
    breadcrumbContent = (
      <Card sx={{ mb: 3, bgcolor: card ? 'background.default' : 'transparent', ...sx }} {...others}>
        <Box sx={{ p: 2, pl: card ? 2 : 0 }}>
          <Grid
            container
            direction={rightAlign ? 'row' : 'column'}
            justifyContent={rightAlign ? 'space-between' : 'flex-start'}
            alignItems={rightAlign ? 'center' : 'flex-start'}
            spacing={1}
          >
            {title && !titleBottom && <Typography variant="h6">{main.title}</Typography>}
            <Grid item>
              <MuiBreadcrumbs
                maxItems={maxItems}
                separator={separatorIcon}
                sx={{ '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 } }}
              >
                <Typography component={Link} to="/" color="textSecondary" variant="subtitle1" sx={linkSX}>
                  {icons && <HomeTwoToneIcon style={iconSX} />}
                  {icon && !icons && <HomeIcon style={{ ...iconSX, marginRight: 0 }} />}
                  {(!icon || icons) && 'Dashboard'}
                </Typography>
                {mainContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && titleBottom && <Typography variant="h6">{main.title}</Typography>}
          </Grid>
        </Box>
        {card === false && divider && <Divider sx={{ mt: 2 }} />}
      </Card>
    );
  }

  if (item?.type === 'item' || item?.type === 'group' || custom) {
    itemTitle = item?.title;

    const ItemIcon = item?.icon || AccountTreeTwoToneIcon;
    itemContent = (
      <Typography variant="subtitle1" sx={{ ...linkSX, color: 'text.secondary' }}>
        {icons && <ItemIcon style={iconSX} />}
        {itemTitle}
      </Typography>
    );

    let tempContent = (
      <MuiBreadcrumbs
        maxItems={maxItems}
        separator={separatorIcon}
        sx={{ '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 } }}
      >
        <Typography component={Link} to="/" color="textSecondary" variant="subtitle1" sx={linkSX}>
          {icons && <HomeTwoToneIcon style={iconSX} />}
          {icon && !icons && <HomeIcon style={{ ...iconSX, marginRight: 0 }} />}
          {(!icon || icons) && 'Dashboard'}
        </Typography>
        {mainContent}
        {itemContent}
      </MuiBreadcrumbs>
    );

    if (custom && links?.length) {
      tempContent = (
        <MuiBreadcrumbs
          maxItems={maxItems}
          separator={separatorIcon}
          sx={{ '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 } }}
        >
          {links.map((link, index) => {
            const CollapseIcon = link.icon || AccountTreeTwoToneIcon;
            return (
              <Typography
                key={index}
                {...(link.to && { component: Link, to: link.to })}
                variant="subtitle1"
                sx={linkSX}
                color={!link.to ? 'text.primary' : 'text.secondary'}
              >
                {link.icon && <CollapseIcon style={iconSX} />}
                {link.title}
              </Typography>
            );
          })}
        </MuiBreadcrumbs>
      );
    }

    breadcrumbContent = (
      <Card sx={{ mb: 3, bgcolor: card ? 'background.default' : 'transparent', ...sx }} {...others}>
        <Box sx={{ p: 2, pl: card ? 2 : 0 }}>
          <Grid
            container
            direction={rightAlign ? 'row' : 'column'}
            justifyContent={rightAlign ? 'space-between' : 'flex-start'}
            alignItems={rightAlign ? 'center' : 'flex-start'}
            spacing={1}
          >
            {title && !titleBottom && <Typography variant="h6">{custom ? heading : item?.title}</Typography>}
            <Grid item>{tempContent}</Grid>
            {title && titleBottom && <Typography variant="h6">{custom ? heading : item?.title}</Typography>}
          </Grid>
        </Box>
        {card === false && divider && <Divider sx={{ mt: 2 }} />}
      </Card>
    );
  }

  return breadcrumbContent;
};

export default Breadcrumbs;
