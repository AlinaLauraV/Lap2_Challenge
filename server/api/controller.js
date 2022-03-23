const express = require('express');
const router = express.Router();
const Note = require(`./notes`);

router.get('/', async (req, res) => {
    try {
        const notes = await Note.all
        res.json({notes})
    } catch(err) {
        res.status(500).json({err})
    }
})

// notes show route
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(parseInt(req.params.id))
        res.json(note)
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create note route
router.post('/', async (req, res) => {
    try {
        const note = await Note.create(req.body.title, req.body.pseudonym, req.body.bodyOfText)
        res.json(note)
    } catch(err) {
        res.status(404).json({err})
    }
})
// const db = require('../connection')

// router.get("/", async (res, rej) => {
//     try {
//         const postData = await db.query('SELECT * FROM post;');
//         const post = postData.rows.map((p) => new post(p));
//         res(post);
//     } catch (err) {
//         rej('Post not found')
//     }
// })
// router.post("/", async (res, rej) => {
//     try {
//         const {title, pseudonym, bodyOfText} = postData;
//         let newPost = await db.query(`INSERT INTO post (title, pseudonym, bodyOfText) values ($1,$2,$3,) RETURNING *;`,
//         [title, pseudonym, bodyOfText]);
//         res (newPost.rows[0]);
//     } catch (err) {
//         rej('New post could not be added')
//     }
// })

// router.get('/:id', async (res, rej) => {
//     try {
//         const published = await db.query('SELECT id FROM post')
//         res.json(published)
//     } catch (err) {
//         rej('Post unable to publish')
//     }
// })
module.exports = router;
