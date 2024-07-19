// Define an array to store notes
let notes = [];

// Function to add a new note
function addNote(noteContent) {
    let newNote = {
        id: generateId(),
        content: noteContent
    };
    notes.push(newNote);
    saveNotes();
}

// Function to edit an existing note
function editNote(noteId, newContent) {
    let noteIndex = findNoteIndexById(noteId);
    if (noteIndex !== -1) {
        notes[noteIndex].content = newContent;
        saveNotes();
    }
}

// Function to delete a note
function deleteNote(noteId) {
    let noteIndex = findNoteIndexById(noteId);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        saveNotes();
    }
}

// Function to find index of a note by ID
function findNoteIndexById(noteId) {
    return notes.findIndex(note => note.id === noteId);
}

// Function to generate unique ID for notes
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to save notes to localStorage
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to load notes from localStorage
function loadNotes() {
    let storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
        notes = JSON.parse(storedNotes);
    }
}

// Example usage:
loadNotes(); // Load existing notes from localStorage if any

// Add a new note
addNote("First note");

// Edit a note (assuming you know the note ID)
editNote(notes[0].id, "Updated content");

// Delete a note (assuming you know the note ID)
deleteNote(notes[0].id);

// After making changes, notes array and localStorage will be updated
console.log(notes);