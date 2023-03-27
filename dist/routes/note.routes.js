"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRoutes = void 0;
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const note_controller_1 = require("../controllers/note.controller");
class NoteRoutes {
    constructor() {
        this.noteController = new note_controller_1.NoteController();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", this.noteController.getAllNotes);
        this.router.post("/", this.noteController.createNote);
        this.router.put("/:noteId", this.noteController.updateNote);
        this.router.delete("/:noteId", this.noteController.deleteNote);
    }
}
exports.NoteRoutes = NoteRoutes;
//# sourceMappingURL=note.routes.js.map