import React, {FC} from 'react';
import {INews} from "../../types/types";
import './NewsLittleItem.css'

interface NewsItemProps {
    news: INews
    onClick: (news: INews) => void;
}

const NewsItem: FC<NewsItemProps> = ({news, onClick}) => {
    return (
        <div onClick={() => onClick(news)} className="little-item-news btn-new">
            <div className="box-image little-item-image">
                <img
                    className="image-little-item-news"
                    src={news.image}
                    alt="Изображение к новости"
                    onError={({currentTarget}) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = 'https://tsul.uz/images/default-news-image.png';
                    }}
                />
            </div>
            <div className="little-news-description-body">
                <p className="news-little-category">{news.category_id.toUpperCase()}</p>
                <h3 className="little-news-title">{news.title}</h3>
                <p className="news-little-description">{news.description}</p>
                <div className="little-news-description">
                    <p className="little-news-date">{news.date.slice(4, 10)}</p>
                    <p className="little-news-source">
                        <a href='/' className="little-news-source-link">ИСТОЧНИК</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;