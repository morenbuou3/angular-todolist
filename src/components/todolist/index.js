import todolistComponent from './todolist.component';
import 'angular';

const todolistModule = angular.module('todo', []);

todolistModule.component('todolist', todolistComponent);

export default todolistModule;