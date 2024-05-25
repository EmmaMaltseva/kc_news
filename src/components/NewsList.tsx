import React, {FC} from 'react';
import {INews} from "../types/types";
import NewsItem from "./NewsItem";

interface NewsListProps {
    news: INews[]
}

const NewsList: FC<NewsListProps> = ({news}) => {
    return (
        <div>
            {news.map(n =>
                <NewsItem news={n} key={n.id}/>
            )}
        </div>
    );
};

export default NewsList;