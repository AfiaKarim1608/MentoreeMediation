const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note');
const notesContainer = document.getElementById('notes-container');

// Fetch notes from the server
async function fetchNotes() {
  const response = await fetch('/notes');
  const notes = await response.json();
  displayNotes(notes);
}

// Display notes in the container
function displayNotes(notes) {
  notesContainer.innerHTML = '';
  notes.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.textContent = note;
    notesContainer.appendChild(noteElement);
  });
}

// Save a new note
saveNoteButton.addEventListener('click', async () => {
  const note = noteInput.value.trim();
  if (note) {
    await fetch('/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note }),
    });
    noteInput.value = ''; // Clear the input
    fetchNotes(); // Refresh the notes
  }
});

// Initial fetch of notes
fetchNotes();
