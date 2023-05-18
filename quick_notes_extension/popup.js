document.addEventListener('DOMContentLoaded', function() {
    var noteInput = document.getElementById('note-input');
  
    // Guardar notas al escribir
    noteInput.addEventListener('input', function() {
      saveNote();
    });
  
    // Cargar notas guardadas al cargar la extensión
    loadNote();
  
    function saveNote() {
      chrome.storage.sync.set({ 'note': noteInput.value }, function() {
        console.log('Nota guardada');
      });
    }
  
    function loadNote() {
      chrome.storage.sync.get('note', function(data) {
        noteInput.value = data.note || '';
      });
    }
  });
  