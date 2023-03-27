/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { NoteController } from "../controllers/note.controller";

export class NoteRoutes {

  public router: Router;
  public noteController: NoteController = new NoteController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/", this.noteController.getAllNotes);
    this.router.post("/", this.noteController.createNote);
    this.router.put("/:noteId", this.noteController.updateNote);
    this.router.delete("/:noteId", this.noteController.deleteNote);
  }
}
