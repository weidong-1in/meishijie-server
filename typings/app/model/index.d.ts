// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClassification = require('../../../app/model/classification');
import ExportComment = require('../../../app/model/comment');
import ExportFollow = require('../../../app/model/follow');
import ExportMenu = require('../../../app/model/menu');
import ExportProperty = require('../../../app/model/property');
import ExportToken = require('../../../app/model/token');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Classification: ReturnType<typeof ExportClassification>;
    Comment: ReturnType<typeof ExportComment>;
    Follow: ReturnType<typeof ExportFollow>;
    Menu: ReturnType<typeof ExportMenu>;
    Property: ReturnType<typeof ExportProperty>;
    Token: ReturnType<typeof ExportToken>;
    User: ReturnType<typeof ExportUser>;
  }
}
