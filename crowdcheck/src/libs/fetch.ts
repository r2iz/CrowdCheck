export interface Congestion {
    exhibitionId: number;
    nowCongestion: string;
    updatedAt: Date;
}

export async function getData(): Promise<Congestion[]> {
    const response = await fetch("https://us-central1-crowd-level-system.cloudfunctions.net/getCongestion");
    const data = await response.json();
    return data;
}