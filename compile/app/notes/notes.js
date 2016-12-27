(function() {
  'use strict';

  angular
    .module('app.notes')
    .controller('Notes', Notes)
    .directive('notes', notes)
    .directive('note', note);

  /* Controller */ 
  Notes.$inject = ['dataservice'];

  function Notes(dataservice) {
    this.notes = [];
    this.dataservice = dataservice;
    
    this.notes = this.getNotes();
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

  /* Directive */
  function notes() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: './compile/app/notes/notes.html',
      transclude: true,
      compile: function(tElem, tAttrs){
        console.log('notes:', 'compile');
        return {
          pre: function(scope, iElem, iAttrs){
            console.log('notes:', 'pre');
          },
          post: function(scope, iElem, iAttrs){
            console.log('notes:', 'post');
          }
        }
      }
    }
  }
  
  /* Directive */
  function note() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: './compile/app/notes/note.html',
      transclude: true,
      compile: function(tElem, tAttrs){
        console.log('note:', 'compile');
        return {
          pre: function(scope, iElem, iAttrs){
            console.log('note:', 'pre');
          },
          post: function(scope, iElem, iAttrs){
            console.log('note:', 'post');
          } 
        }
      }
    }
  }

})();
