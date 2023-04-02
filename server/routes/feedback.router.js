
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', async (req, res) => {
    try {
        const { feeling, understanding, support, comments } = req.body;

        // Check if all required fields are present
        if (!feeling || !understanding || !support) {
            throw new Error('All fields are required');
        }

        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const queryText = 'INSERT INTO "feedback" (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)';
            const queryValues = [feeling, understanding, support, comments];
            await client.query(queryText, queryValues);

            await client.query('COMMIT');
            res.sendStatus(201);
        } catch (error) {
            await client.query('ROLLBACK');
            console.log('Error adding feedback to database', error);
            res.sendStatus(500);
        } finally {
            client.release();
        }
    } catch (error) {
        console.log('Error adding feedback to database', error);
        res.sendStatus(500);
    }
});

module.exports = router;
