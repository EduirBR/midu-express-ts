import diaryData from './json.json'
import { DairyEntry, NonSensitiveDiaryEntry } from './types'

const diaries: DairyEntry[] = diaryData as DairyEntry[]

export const getEntries = (): DairyEntry[] => diaries
// hay que mapear la data para poder tener los resultados deseados
export const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id, date, weather, visibility
        }
    })
}
export const addEntry = (): undefined => undefined

export const findEntryByID = (id: number): NonSensitiveDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id == id)
    if (entry != undefined) {
        const { comment, ...diaryFields } = entry
        return diaryFields
    }
    return undefined
}
