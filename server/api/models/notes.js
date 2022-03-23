const db = require('../dbConfig');

module.exports = class Note {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.body = data.body;
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

static create(name, title, body){
    return new Promise (async (resolve, reject) => {
        try {
            let noteData = await db.query(`INSERT INTO post (name, title, body) VALUES ($1, $2, $3) RETURNING *;`, [ name, title, body ]);
            let newNote = new Note(noteData.rows[0]);
            resolve (newNote);
        } catch (err) {
            reject('Error creating note');
        }
    });
}

}
