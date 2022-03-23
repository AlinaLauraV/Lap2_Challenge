const db = require('../dbConfig');

module.exports = class Note {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.bodyOfText = data.bodyOfText;
    };

static get all() {
    return new Promise (async (resolve, reject) => {
        try {
            const notesData = await db.query(`SELECT * FROM post;`)
            const notes = notesData.rows.map(d => new Note(d))
            resolve(notes);
        } catch (err) {
            reject("Error retrieving posts")
        }
    })
}

static findById (id) {
    return new Promise (async (resolve, reject) => {
        try {
            let noteData = await db.query(`SELECT * FROM post WHERE id = $1;`, [ id ]);
            let note = new Note(noteData.rows[0]);
            resolve (note);
        } catch (err) {
            reject('Post not found');
        }
    });
}

static create(title, pseudonym, bodyOfText){
    return new Promise (async (resolve, reject) => {
        try {
            let noteData = await db.query(`INSERT INTO post (title, pseudonym, bodyOfText) VALUES ($1, $2, $3) RETURNING *;`, [ title, pseudonym, bodyOfText ]);
            let newNote = new Note(noteData.rows[0]);
            resolve (newNote);
        } catch (err) {
            reject('Error creating note');
        }
    });
}

}
