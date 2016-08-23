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
        description:'Benutzer: Admin'
      },
      {
        icon:'glyphicon-th',
        colour:'btn-primary btn-lg',
        name:'Zeiterfassungsmatrix',
        description:'Heutiges Datum: 20.10.15'
      },
      {
        icon:'glyphicon-time',
        colour:'btn-primary btn-lg',
        name:'Zeiterfassungsliste',
        description:'Aktuelle Uhrzeit: 09:20'
      },
      {
        icon:'glyphicon-calendar',
        colour:'btn-primary btn-lg',
        name:'Kalenderansicht',
        description:'Kalenderwoche: 35'
      },
      {
        icon:'glyphicon-plane',
        colour:'btn-primary btn-lg',
        name:'Urlaubsanträge',
        description:'Urlaubstage vorhanden: 2'
      },
      {
        icon:'glyphicon-education',
        colour:'btn-primary btn-lg',
        name:'Schulungsanträge',
        description:'Schulungstage beantragt: 3'
      }
    ];
  }
]);
