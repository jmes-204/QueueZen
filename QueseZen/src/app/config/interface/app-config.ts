
export interface Menu {
  MENU_ID: string;
  MENU_NAME: string;
  MENU_DETAIL: string;
  MENU_URL: string;
  MENU_PARENT: string;
  SYSTEM_ID: string;
  ORDER_NO: number;
}

export interface General {
  CONFIG_NAME: string;
  CONFIG_VALUE: any;
  CONFIG_DESCR: string;
}

/**
 * export เฉพาะ export interface นี้เท่านั้น
 */
export interface AppConfig {
  // systems?: System[];
  menus?: Menu[];
  general?: General[];
}
