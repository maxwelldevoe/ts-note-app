"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const note_model_1 = __importDefault(require("../models/note.model"));
class NoteController {
    async getAllNotes(req, res) {
        const notes = await note_model_1.default.find({});
        res.json(notes);
    }
    async createNote(req, res) {
        const newNote = new note_model_1.default(req.body);
        const note = await newNote.save();
        res.json(note);
    }
    async updateNote(req, res) {
        const note = await note_model_1.default.findOneAndUpdate({ _id: req.params.noteId }, req.body, { new: true });
        res.json(note);
    }
    async deleteNote(req, res) {
        const note = await note_model_1.default.findOneAndDelete({ _id: req.params.noteId });
        res.json(note);
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map