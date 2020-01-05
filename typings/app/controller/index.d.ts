// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportMenu = require('../../../app/controller/menu');
import ExportUser = require('../../../app/controller/user');
import ExportUserAction = require('../../../app/controller/userAction');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    menu: ExportMenu;
    user: ExportUser;
    userAction: ExportUserAction;
  }
}
