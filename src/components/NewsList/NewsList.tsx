import React, {FC} from 'react';
import {INews} from "../../types/types";
import NewsItem from "../NewsItem/NewsItem";
import {useNavigate, useParams} from "react-router-dom";
import './NewsList.css'

interface NewsListProps {
    news: INews[]
}

const NewsList: FC<NewsListProps> = ({news}) => {
    const navigate = useNavigate();

    return (
        <div className="">
            <div className="container list-big-item-news">
                {news.map((n,index) =>
                    <NewsItem
                        onClick={(n) => navigate('/main/' + index)}
                        news={n}
                        key={n.id} />
                )}
            </div>
        </div>
    );
};

export default NewsList;