export type workDescription = {
    id: string;
    title: string;
    category: {
        name: string;
    }
    description: string;
    releasedate: string;
}

export type Category = {
    name: string;
}