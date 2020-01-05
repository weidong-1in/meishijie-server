// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActionToken = require('../../../app/service/actionToken');
import ExportMenu = require('../../../app/service/menu');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    actionToken: ExportActionToken;
    menu: ExportMenu;
    user: ExportUser;
  }
}
