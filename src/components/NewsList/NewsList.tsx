import React, {FC} from 'react';
import {INews} from "../../types/types";
import NewsItem from "../NewsItem/NewsItem";
import NewsLittleItem from "../NewsLittleItem/NewsLittleItem";
import {useNavigate} from "react-router-dom";
import './NewsList.css'

interface NewsListProps {
    news: INews[]
}

const NewsList: FC<NewsListProps> = ({news}) => {
    const navigate = useNavigate();

    return (
        <div className="">
            <div className="container-my list-news">
                <div className="list-big-item-news">
                {news.filter((n, index) => index < 3).map((n, index) =>
                    <NewsItem
                        onClick={(n) => navigate('/main/' + index)}
                        news={n}
                        key={n.id}/>
                )}
                </div>
                <div className="list-little-item-news">
                    {news.filter((n, index) => index  > 2).map((n, index) =>
                        <NewsLittleItem
                            onClick={(n) => navigate('/main/' + (index+3))}
                            news={n}
                            key={n.id}
                        />
                    )}
                </div>
            </div>
        </div>
        );
    };

export default NewsList;