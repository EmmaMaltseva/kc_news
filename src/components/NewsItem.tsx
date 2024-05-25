import React, {FC} from 'react';
import {INews} from "../types/types";

interface NewsItemProps {
    news: INews
}

const NewsItem: FC<NewsItemProps> = ({news}) => {
    return (
        <div style={{border: '1px solid black'}}>
            <img
                src={news.image}
                alt="Изображение к новости"
                height="200"
            />
            {news.category_id.toUpperCase()} {news.title} {news.description} {news.source_id.toUpperCase()}
        </div>
    );
};

export default NewsItem;