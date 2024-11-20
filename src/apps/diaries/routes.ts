import express, { Request, Response } from "express"; // ESModules
// const express = require('express) -> commonjs
import * as diaryServices from "./services";
import { NonSensitiveDiaryEntry } from "./types";
const diaryRouter = express.Router();

diaryRouter.get("/", (_, res) => {
    res.send(diaryServices.getNonSensitiveEntries());
});

diaryRouter.get("/:id", (req: Request<{ id: string }>, res: Response) => {
    const id = +req.params.id; //+ al inicio para convertirlo en numero
    const diary: NonSensitiveDiaryEntry | undefined =
        diaryServices.findEntryByID(id);
    if (diary != undefined) {
        res.send(diary);
    } else {
        res.sendStatus(404);
    }
});

diaryRouter.post("/", (req, res) => {
    const { date, weather, visibility, comment } = req.body;
    const newDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment,
    });
    res.json(newDiaryEntry);
});

export default diaryRouter;
