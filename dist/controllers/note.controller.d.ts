import { Request, Response } from "express";
export declare class NoteController {
    getAllNotes(req: Request, res: Response): Promise<void>;
    createNote(req: Request, res: Response): Promise<void>;
    updateNote(req: Request, res: Response): Promise<void>;
    deleteNote(req: Request, res: Response): Promise<void>;
}
