export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}

export interface Todo   {
    userId : number,
    id: number,
    title : string,
    completed : boolean
}