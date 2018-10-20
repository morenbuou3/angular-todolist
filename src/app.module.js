import './app.components';
import './services/core.module';
import 'angular';

const appModule = angular
  .module('to-do-list', [
    'todo',
    'ui.router',
  ]);

export default appModule;
