(function() {
  'use strict';

  angular
    .module('app.notes')
    .controller('Notes', Notes);

  Notes.$inject = ['$scope', 'dataservice'];

  function Notes($scope, dataservice) {
    
    this.$scope = $scope;
    this.notes  = [];
    this.dataservice  = dataservice;
    
    this.getNotes();
  };

  Notes.prototype.getNotes = function() {
    return this.dataservice.getNotes().then((data) => {
      this.notes = data;
    });
  };

  Notes.prototype.addNote = function() {
    if (!this.$scope.newNote)
      return;

    return this.dataservice.addNote({title: this.$scope.newNote}).then((data) => {
      this.notes = data;
      this.$scope.newNote = '';
    })
  };
  
  Notes.prototype.delNote = function(index) {
    return this.dataservice.delNote(index).then((data) => {
      this.notes = data;
    });
  };

})();
