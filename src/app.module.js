import { User } from './user'
import './app.components';
import './services/core.module';
import 'angular';

let user = new User();

console.log(user.getUsers());

const appModule = angular
  .module('to-do-list', [
    'todo',
    'ui.router'
  ]);

export default appModule;