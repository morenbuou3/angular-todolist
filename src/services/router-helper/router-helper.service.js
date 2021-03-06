import appRoutes from './app-routes';
import 'angular';

export default function routerHelper($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  appRoutes.forEach((route) => {
    $stateProvider.state(route);
  });
}
