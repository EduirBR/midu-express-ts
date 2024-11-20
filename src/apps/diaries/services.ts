import diaryData from "./json.json";
import { DairyEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from "./types";

const diaries: DairyEntry[] = diaryData as DairyEntry[];

export const getEntries = (): DairyEntry[] => diaries;
// hay que mapear la data para poder tener los resultados deseados
export const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility,
        };
    });
};
export const addDiary = (newDiary: NewDiaryEntry): DairyEntry => {
    const newDiaryEntry = {
        id: Math.max(...diaries.map((d) => d.id)) + 1,
        ...newDiary,
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};

export const findEntryByID = (
    id: number
): NonSensitiveDiaryEntry | undefined => {
    const entry = diaries.find((d) => d.id == id);
    if (entry != undefined) {
        const { comment, ...diaryFields } = entry;
        return diaryFields;
    }
    return undefined;
};
