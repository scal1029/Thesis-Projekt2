'use strict';

// Articles controller

var articlesApp = angular.module('articles');

articlesApp.controller('ArticlesController', ['$scope', '$stateParams', 'Authentication', 'Articles', '$modal', '$log',
  function ($scope, $stateParams, Authentication, Articles, $modal, $log) {

    this.authentication = Authentication;

    // Find a list of Articles
    this.articles = Articles.query();

    // Open modal window to create a single time record
    this.modalCreate = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/articles/client/views/create-article.client.view.html',
        controller: function ($scope, $modalInstance) {

          $scope.ok = function () {


            $modalInstance.close();


          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: size
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    // Open modal window to update a single time record
    this.modalUpdate = function (size, selectedArticle) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/articles/client/views/edit-article.client.view.html',
        controller: function ($scope, $modalInstance, article) {
          $scope.article = article;

          $scope.ok = function () {


            $modalInstance.close($scope.article);


          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: size,
        resolve: {
          article: function () {
            return selectedArticle;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    // Remove existing Article
    this.remove = function (article) {
      if (article) {
        article.$remove();

        for (var i in this.articles) {
          if (this.articles[i] === article) {
            this.articles.splice(i, 1);
          }
        }
      } else {
        this.article.$remove(function () {

        });
      }
    };

  }
]);

articlesApp.controller('ArticlesCreateController', ['$scope', 'Articles', //'Notify',
  function ($scope, Articles) {//, Notify

    // Create new Article
    this.create = function () {

      // Create new Article object
      var article = new Articles({
        period: this.period,
        projekt: this.projekt,
        verkaufsprojekt: this.verkaufsprojekt,
        aktivitaet: this.aktivitaet,
        typ: this.typ,
        projektaufgabe: this.projektaufgabe,
        datum: this.datum,
        stunden: this.stunden,
        kommentar: this.kommentar,
        oppty: this.oppty,
        einsatzort: this.einsatzort,
        fakultierbar: this.fakultierbar
      });

      // Redirect after save
      article.$save(function (response) {

      //Notify.sendMsg('NewRecord', {'id': response._id});

      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

  }
]);

articlesApp.controller('ArticlesUpdateController', ['$scope', 'Articles',
  function ($scope, Articles) {

    // Update existing Article
    this.update = function (updatedArticle) {

      var article = updatedArticle;

      article.$update(function () {

      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };


  }
]);


/*

    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      //
      //if (!isValid) {
      // $scope.$broadcast('show-errors-check-validity', 'articleForm');

      // return false;
      //}//

      // Create new Article object
      var article = new Articles({
        period: this.period,
        projekt: this.projekt,
        verkaufsprojekt: this.verkaufsprojekt,
        aktivitaet: this.aktivitaet,
        typ: this.typ,
        projektaufgabe: this.projektaufgabe,
        datum: this.datum,
        stunden: this.stunden,
        kommentar: this.kommentar,
        oppty: this.oppty,
        einsatzort: this.einsatzort,
        fakultierbar: this.fakultierbar
      });

      // Redirect after save
      article.$save(function (response) {
        $location.path('articles/' + response._id);

        // Clear form fields
        $scope.periode = '';
        $scope.projekt = '';
        $scope.verkaufsprojekt = '';
        $scope.aktivitaet = '';
        $scope.typ = '';
        $scope.projektaufgabe = '';
        $scope.datum = '';
        $scope.stunden = '';
        $scope.kommentar = '';
        $scope.mitarbeiter = '';
        $scope.oppty = '';
        $scope.einsatzort = '';
        $scope.fakultierbar = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function (article) {
      if (article) {
        article.$remove();

        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function () {
          $location.path('articles');
        });
      }
    };

    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var article = $scope.article;

      article.$update(function () {
        $location.path('articles/' + article._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };



    // Find existing Article
    $scope.findOne = function () {
      $scope.article = Articles.get({
        articleId: $stateParams.articleId
      });
    };

*/
