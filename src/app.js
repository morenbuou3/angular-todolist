import './components/todolist/index';
import './services/core.module';
import 'angular';
import 'angular-mocks'

const app = angular
  .module('to-do-list', ['todo']);

export default app;
