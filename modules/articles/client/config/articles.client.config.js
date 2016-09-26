'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Zeiterfassung',
      state: 'articles',
      type: 'dropdown',
      roles: ['user']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'Kalenderansicht',
      state: 'articles.create',
      roles: ['user']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'Zeiterfassungsmatrix',
      state: 'articles.list',
      roles: ['user']
    });

    Menus.addSubMenuItem('topbar', 'articles',{
      title: 'Zeiterfassungsliste',
      state: 'articles.search',
      roles: ['user']
    });
  }
]);
