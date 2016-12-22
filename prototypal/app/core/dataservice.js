(function() {
    'use strict';

    angular
      .module('app.core')
      .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($q) {
      
      var notes = [
        { title: 'one' },
        { title: 'two' },
        { title: 'three' }
      ];

      var service = {
        getNotes: getNotes,
        addNote:  addNote,
        delNote:  delNote,
      };

      return service;

      /* Get notes data */
      function getNotes() {
        return $q.when(notes);
      };

      /* Add note */
      function addNote(note) {
        notes.push(note);
        return $q.when(notes);
      };

      /* del note data */
      function delNote(index) {
        notes.splice(index, 1);
        return $q.when(notes);
      };

    };

})();