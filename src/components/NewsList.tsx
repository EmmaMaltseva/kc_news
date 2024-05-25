import React, {FC} from 'react';
import {INews} from "../types/types";
import NewsItem from "./NewsItem";
import {useNavigate, useParams} from "react-router-dom";

interface NewsListProps {
    news: INews[]
}

const NewsList: FC<NewsListProps> = ({news}) => {
    const navigate = useNavigate();

    return (
        <div>
            {news.map((n,index) =>
                <NewsItem
                    onClick={(n) => navigate('/main/' + index)}
                    news={n}
                    key={n.id} />
            )}
        </div>
    );
};

export default NewsList;