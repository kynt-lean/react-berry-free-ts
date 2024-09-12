import { ChipTypeMap } from '@mui/material/Chip';
import { TablerIconsProps } from '@tabler/icons-react';

export interface MenuItems {
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  type: string;
  title?: string;
  caption?: string;
  url?: string;
  icon?: (props: TablerIconsProps) => JSX.Element;
  breadcrumbs?: boolean;
  children?: MenuItem[];
  external?: boolean;
  target?: boolean;
  disabled?: boolean;
  chip?: ChipTypeMap['props'];
}
