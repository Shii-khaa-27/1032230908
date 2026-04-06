const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CREATE
router.post('/add', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send('Student Added');
    } catch (err) {
        console.error("ADD ERROR:", err);
        res.status(500).send("Error adding student");
    }
});

// READ
router.get('/view', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        console.error("VIEW ERROR:", err);
        res.status(500).send("Error fetching students");
    }
});

// UPDATE
router.put('/update/:id', async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send('Student Updated');
    } catch (err) {
        console.error("UPDATE ERROR:", err);
        res.status(500).send("Error updating");
    }
});

// DELETE
router.delete('/delete/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send('Student Deleted');
    } catch (err) {
        console.error("DELETE ERROR:", err);
        res.status(500).send("Error deleting");
    }
});

module.exports = router;