import todolistComponent from './todolist.component';
import 'angular';
const style = require('../todolist/todolist.less');

const todolistModule = angular.module('todo', []);

todolistModule.component('todolist', todolistComponent);

export default todolistModule;
