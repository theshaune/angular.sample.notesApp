(function() {
  'use strict';

  angular
    .module('app.notes')
    .controller('Notes', Notes);

  /* @ngInject */
  function Notes($scope, dataservice) {
  
    /**
     * Use this convention instead of $scope
     * @link https://toddmotto.com/digging-into-angulars-controller-as-syntax/
     * @link https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/ 
     */
    this.notes = [];
    this.getNotes = getNotes;
    this.addNote  = addNote;
    this.delNote  = delNote;

    this.getNotes();
    
    /** 
     * @name Get Notes 
     */
    function getNotes() {
      return dataservice.getNotes().then(function(data) {
        this.notes = data;
        return this.notes;
      }.bind(this))
    };

    /**
     * @name Add note
     * @description Add a note to our notes 
     */
    function addNote(){
      /* Check that there is a note to add from the newNote input */ 
      if (!$scope.newNote)
        return;

      return dataservice.addNote({title: $scope.newNote}).then(function(data) {
        this.notes = data;
        
        /* Clear newNote input model */
        $scope.newNote = '';
        
        return this.notes;
      }.bind(this));
    };

    /**
     * @name Delete note
     * @description Add a note to our notes 
     */
    function delNote(index){
      return dataservice.delNote(index).then(function(data) {
        this.notes = data;
        return this.notes;
      }.bind(this))
    }

  };
})();
