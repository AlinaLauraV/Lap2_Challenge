const btn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-form');
const dogsList = document.querySelector('table');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitNote);

// Fetch all notes as soon as app is loaded
getAllNotes();

// ********************************************


// index
function getAllNotes(){
    fetch('http://localhost:4000/notes')
        .then(r => r.json())
        .then(appendNotes)
        .catch(console.warn)
};

// create
function submitNote(e){
    e.preventDefault();

    const NoteData = {
        title: e.target.title.value,
        name: e.target.pseudonym.value,
        bodyOfText: e.target.bodyOfText.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(noteData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:4000/notes', options)
        .then(r => r.json())
        .then(appendNote)
        .then(() => e.target.reset())
        .catch(console.warn)
};



// helpers
function appendNotes(data){
    data.notes.forEach(appendNote);
};

function appendNote(noteData){
    const newRow = document.createElement('tr');
    const noteLi = formatNoteTr(noteData, newRow)
    notesList.append(newRow);
};


function formatNoteTr(note, tr){
    const nameTd = document.createElement('td');
    const titleTd = document.createElement('td');
    const bodyTd = document.createElement('td');



    nameTd.textContent = note.title
    titleTd.textContent = note.pseudonym
    bodyTd.textContent = note.bodyOfText

    tr.append(nameTd)
    tr.append(titleTd)
    tr.append(bodyTd)

    return tr
}

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:4000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    document.querySelector('#msg-btn').textContent = msgText;
};
