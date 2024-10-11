const noteModel = require('../models/NotesModel');
const { validationResult } = require('express-validator');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    if(!validationResult(req).isEmpty()) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    try{
        const note = await new noteModel({
            ...req.body
        })

        await note.save();
        res.status(201).json({
            message: "Note created and added to DB"})
    } catch(e){
        res.status(500).json({
            message: "Server error",
            error: e
        });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    if(!validationResult(req).isEmpty()) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    try{
        const notes = await noteModel.find({});
        res.status(201).json({notes});
    } catch(e) {
        res.status(500).json({
            message: "Server error",
            error: e
        });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!validationResult(req).isEmpty()) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try{
        const note = await noteModel.findById({_id: req.params.noteId});
        if(note)
            res.status(201).json({note});
        else
            res.status(401).json({ message: "Note not found"})
    } catch(e){
        res.status(500).json({
            message: "Server error",
            error: e
        });
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!validationResult(req).isEmpty()) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try{
        if(await noteModel.findById({_id: req.params.noteId}) == null)
            res.status(400).send({
                message: "Note not found"
            });
        await noteModel.findByIdAndUpdate({_id: req.params.noteId}, {$set : req.body})
        res.status(201).json({message: "Note updated"})
    }catch(e) {
        res.status(500).json({
            message: "Server error",
            error: e
        });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!validationResult(req).isEmpty()) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try{
        await noteModel.findByIdAndDelete({_id: req.params.noteId});
        res.status(201).json({
            message: "Note deleted successfully."
        })
    }catch(e) {
        res.status(500).json({
            message: "Server error",
            error: e
        });
    }
});

module.exports = app;