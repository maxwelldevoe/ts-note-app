import { Router } from "express";
import { NoteController } from "../controllers/note.controller";
export declare class NoteRoutes {
    router: Router;
    noteController: NoteController;
    constructor();
    private routes;
}
