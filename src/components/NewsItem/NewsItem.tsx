import React, {FC} from 'react';
import {INews} from "../../types/types";
import './NewsItem.css'

interface NewsItemProps {
    news: INews
    onClick: (news: INews) => void;
}

const NewsItem: FC<NewsItemProps> = ({news, onClick}) => {
    return (
        <div onClick={() => onClick(news)} className="big-item-news btn-new">
            <div className="box-image">
                <img
                    className="image-big-item-news"
                    src={news.image}
                    alt="Изображение к новости"
                    onError={({currentTarget}) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = 'https://tsul.uz/images/default-news-image.png';
                    }}
                />
            </div>
            <div className="news-description-body">
                <p className="news-category">{news.category_id.toUpperCase()}</p>
                <h2 className="news-title">{news.title}</h2>
                <p className="news-description">{news.description}</p>
                <p className="news-source">
                    <a href='/' className="news-source-link">ИСТОЧНИК</a>
                </p>

            </div>
        </div>
    );
};

export default NewsItem;