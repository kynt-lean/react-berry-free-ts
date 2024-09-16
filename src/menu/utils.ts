import { MenuItem } from './models';

export const menuItemExists = (items: MenuItem[], id: string): boolean => {
  for (const item of items) {
    if (item.id === id) {
      return true;
    }
    if (item.children && menuItemExists(item.children, id)) {
      return true;
    }
  }
  return false;
};

export const modifyMenuItemInTree = (items: MenuItem[], modifiedItem: MenuItem): boolean => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === modifiedItem.id) {
      items[i] = { ...items[i], ...modifiedItem };
      return true;
    }
    if (items[i].children && modifyMenuItemInTree(items[i].children!, modifiedItem)) {
      return true;
    }
  }
  return false;
};
