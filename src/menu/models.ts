import { ChipOwnProps } from '@mui/material/Chip';
import { TablerIconsProps } from '@tabler/icons-react';

export type MenuItems = MenuItem[];

export interface MenuItem {
  id: string;
  title?: string;
  caption?: string;
  order: number;
  type: 'group' | 'collapse' | 'item';
  url?: string;
  icon?: (props: TablerIconsProps) => JSX.Element;
  breadcrumbs?: boolean;
  children?: MenuItem[];
  external?: boolean;
  target?: boolean;
  disabled?: boolean;
  chip?: ChipOwnProps;
}
