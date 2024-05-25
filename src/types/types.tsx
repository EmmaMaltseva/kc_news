export interface ISources {
    id: number;
    name: string;
}

export interface ICategories {
    id: number;
    name: string;
}

export interface INews {
    id: number;
    lang: string;
    date: Date;
    title: string;
    description: string;
    image: string;
    source_id: string;
    category_id: string;
}

export interface IAll {
    sources: ISources[],
    categories: ICategories[],
    items: INews[],
}


