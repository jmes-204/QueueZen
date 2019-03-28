import { User } from '../user';
import { Menu, General } from '../app-config';

export interface CurrentConfig {
    userInfo: User;
    menus: Menu[];
    general: General[];
}
