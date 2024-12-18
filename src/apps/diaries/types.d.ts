export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DairyEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

// export type NonSensitiveDiaryEntry = Pick<DairyEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveDiaryEntry = Omit<DairyEntry, "comment">;
export type NewDiaryEntry = Omit<DairyEntry, "id">;
