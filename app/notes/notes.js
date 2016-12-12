(function() {
  'use strict';

  angular
    .module('app.notes')
    .controller('Notes', Notes);

  Notes.$inject = ['dataservice'];

  function Notes(dataservice) {
    
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
    if (!this.newNote)
      return;

    return this.dataservice.addNote({title: this.newNote}).then((data) => {
      this.notes = data;
    })
  };
  
  Notes.prototype.delNote = function(index) {
    return this.dataservice.delNote(index).then((data) => {
      this.notes = data;
    });
  };

})();
