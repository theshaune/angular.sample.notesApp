/**
 * @ngdoc module

 * @name app
 * @description Simple notes app.
 */
(function () {
  'use strict';

  /* Angular Module */
  var app = angular.module('app',[]);

  /**
   * @ngdoc controller
   * @name NotesCtrl
   */
  app.controller('NotesCtrl', NotesCtrl);

  /* Notes Controller function */
  function NotesCtrl() {

    /**
     * Use this convention instead of $scope
     * @link https://toddmotto.com/digging-into-angulars-controller-as-syntax/
     * @link https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/ 
     */
    this.notes = [
      'one',
      'two',
      'three',
      'four'
      ];
  };

})();