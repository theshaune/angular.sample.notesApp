'use strict';

/**
 * @ngdoc module

 * @name app
 * @description Simple notes app.
 */
(function () {

  /* Angular Module */
  var app = angular.module('app',[]);

  /**
   * @ngdoc controller
   * @name NotesCtrl
   */
  app.controller('NotesCtrl', ['$scope', function($scope) {
    $scope.notes = [
      'one',
      'two',
      'three',
      'four'
      ];
  }]);

})();