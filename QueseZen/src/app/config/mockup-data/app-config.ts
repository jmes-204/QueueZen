import { AppConfig } from '../interface/app-config';

export const APP_CONFIG: AppConfig = {

  menus: [
    {
      MENU_ID: '1',
      MENU_NAME: 'EntityConfigurations',
      MENU_DETAIL: 'Entity Configurations',
      MENU_URL: 'entity-configurations',
      MENU_PARENT: null,
      SYSTEM_ID: '1',
      ORDER_NO: 1
    }, {
      MENU_ID: '2',
      MENU_NAME: 'BranchManagement',
      MENU_DETAIL: 'BranchManagement',
      MENU_URL: 'branch-management',
      MENU_PARENT: null,
      SYSTEM_ID: '1',
      ORDER_NO: 2
    }
  ],
  general: [
    {
      CONFIG_NAME: 'NAME',
      CONFIG_VALUE: 'VALUE',
      CONFIG_DESCR: 'DESCR'
    }
  ]
};
