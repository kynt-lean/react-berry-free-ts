import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';

interface MenuMaster {
  openedItem: string;
  openedComponent: string;
  openedHorizontalItem: null;
  isDashboardDrawerOpened: boolean;
  isComponentDrawerOpened: boolean;
}

const initialState: MenuMaster = {
  openedItem: 'dashboard',
  openedComponent: 'buttons',
  openedHorizontalItem: null,
  isDashboardDrawerOpened: false,
  isComponentDrawerOpened: true
};

export const endpoints = {
  key: 'api/menu',
  master: 'master',
  dashboard: '/dashboard'
};

export function useGetMenuMaster() {
  const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  const memoizedValue = useMemo(
    () => ({
      menuMaster: data,
      menuMasterLoading: isLoading
    }),
    [data, isLoading]
  );
  return memoizedValue;
}

export function handlerDrawerOpen(isDashboardDrawerOpened: boolean) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster: any) => {
      return { ...currentMenuMaster, isDashboardDrawerOpened };
    },
    false
  );
}

export function handlerActiveItem(openedItem: string) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster: any) => {
      return { ...currentMenuMaster, openedItem };
    },
    false
  );
}
