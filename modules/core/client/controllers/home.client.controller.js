'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.alerts = [
      {
        icon:'glyphicon-home',
        colour:'btn-primary btn-lg',
        name:'Home',
        description:'Homepage',
        uisref: 'home'
      },
      {
        icon:'glyphicon-th',
        colour:'btn-primary btn-lg',
        name:'Zeiterfassungsmatrix',
        description:'Klassische Zeiterfassung',
        uisref: 'articles.list'
      },
      {
        icon:'glyphicon-time',
        colour:'btn-primary btn-lg disabled',
        name:'Zeiterfassungsliste',
        description:'Nur Verwaltung und Studenten',
        uisref: 'home'
      },
      {
        icon:'glyphicon-calendar',
        colour:'btn-primary btn-lg',
        name:'Kalenderansicht',
        description:'Monats- und Tagesansicht',
        uisref: 'articles.create'
      },
      {
        icon:'glyphicon-plane',
        colour:'btn-primary btn-lg disabled',
        name:'Urlaubsanträge',
        description:'Funktion nicht aktiv',
        uisref: 'home'
      },
      {
        icon:'glyphicon-education',
        colour:'btn-primary btn-lg disabled',
        name:'Schulungsanträge',
        description:'Funktion nicht aktiv',
        uisref: 'home'
      }
    ];
  }
]);
