export interface New {
    title: string;
    description: string;
    date: Date | string;
    content: string;
    author: string;
    archivedDate?: Date | string;
    _id?: string;
}
