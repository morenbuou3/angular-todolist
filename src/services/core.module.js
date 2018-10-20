import routerHelperService from './router-helper/router-helper.service';
import 'angular';

const coreModule = angular.module('app.core', [
  'ui.router',
]);

coreModule.config(routerHelperService);

export default coreModule;
