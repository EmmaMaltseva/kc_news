import React, {FC} from 'react';
import {INews} from "../types/types";

interface NewsItemProps {
    news: INews
    onClick: (news: INews) => void;
}

const NewsItem: FC<NewsItemProps> = ({news, onClick}) => {
    return (
        <div onClick={() => onClick(news)} style={{border: '1px solid black'}}>
            <img
                src={news.image}
                alt="Изображение к новости"
                width="350"
                onError={({currentTarget}) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = 'https://tsul.uz/images/default-news-image.png';
                }}
            />
            {news.category_id.toUpperCase()} {news.title} {news.description} {news.source_id.toUpperCase()}
        </div>
    );
};

export default NewsItem;