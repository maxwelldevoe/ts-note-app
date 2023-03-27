import { Request, Response } from 'express';
import Note from '../models/note.model';

export class NoteController {

  public async getAllNotes(req: Request, res: Response) {
    const notes = await Note.find({});
    res.json(notes);
  }

  public async createNote(req: Request, res: Response) {
    const newNote = new Note(req.body);
    const note = await newNote.save();
    res.json(note);
  }

  public async updateNote(req: Request, res: Response) {
    const note = await Note.findOneAndUpdate({ _id: req.params.noteId }, req.body, { new: true });
    res.json(note);
  }

  public async deleteNote(req: Request, res: Response) {
    const note = await Note.findOneAndDelete({ _id: req.params.noteId });
    res.json(note);
  }

}