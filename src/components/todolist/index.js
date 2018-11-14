import todolistComponent from './todolist.component';
import todolistController from './todolist.controller';
const style = require('../todolist/todolist.less');

const todolistModule = angular.module('todo', []).component('todolist', todolistComponent);

todolistModule.controller('todolistController', todolistController);

export default todolistModule;
