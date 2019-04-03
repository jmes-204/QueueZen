import { IFUser } from '../user';
import { IFMenu, IFGeneral } from '../app-config';

export interface IFCurrenceConfig  {
    USER_INFO: IFUser;
    MENUS: IFMenu[];
    GENERAL: IFGeneral[];
}
