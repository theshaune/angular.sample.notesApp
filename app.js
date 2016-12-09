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
  app.controller('NotesController', NotesController);

  /* Notes Controller function */
  function NotesController($scope) {

    /**
     * Use this convention instead of $scope
     * @link https://toddmotto.com/digging-into-angulars-controller-as-syntax/
     * @link https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/ 
     */
    var notes = [
      { title: 'one' },
      { title: 'two' },
      { title: 'three' }
    ];
    
    /* Get notes */
    this.notes = notes;

    /**
     * @name Add note
     * @description Add a note to our notes 
     */
    this.addNote = function(){

      /* Check that there is a note to addfrom the newNote input */ 
      if (!$scope.newNote)
        return;
        
      /* Add note from the newNote input model */
      this.notes.push({
        title: $scope.newNote
      });
      
      /* Clear newNote input model */
      $scope.newNote = '';
      
    };

    /**
     * @name Delete note
     * @description Add a note to our notes 
     */
    this.delNote = function(index){
      this.notes.splice(index, 1);
    };
  };

})();