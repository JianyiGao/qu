(function (app) {
  'use strict';

  app.registerModule('core', ['ui.bootstrap', 'booking']);
  app.registerModule('core.routes', ['ui.router']);
  app.registerModule('core.admin', ['core']);
  app.registerModule('core.admin.routes', ['ui.router']);
}(ApplicationConfiguration));
