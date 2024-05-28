import React, {FC} from 'react';
import {INews} from "../../types/types";
import './NewsLittleItem.css'

interface NewsItemProps {
    news: INews
    onClick: (news: INews) => void;
}

const NewsItem: FC<NewsItemProps> = ({news, onClick}) => {
    return (
        <div onClick={() => onClick(news)} className="little-item-news">
            <div>
                <h3 className="little-news-title">{news.title}</h3>
                <div className="little-news-description">
                    <p className="little-news-title">{news.date.slice(4, 10)}</p>
                    <p className="little-news-source">
                        <a href='/' className="little-news-source-link">ИСТОЧНИК</a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default NewsItem;