import React, {FC, useEffect, useState} from 'react';
import {INews} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import NewsService from "../API/NewsService";
import Loader from "../components/UI/Loader/Loader";

type NewsItemPageParams = {
    id: string;
}

const NewsItemPage:FC = () => {

    const [news, setNews] = useState<INews | null>(null)

    const params = useParams<NewsItemPageParams>()
    const navigate = useNavigate();

    const [fetchNews, isNewsLoading, newsError] = useFetching(async () => {
        const news = await NewsService.getNews();
        // @ts-ignore
        setNews(news[params.id])
    })

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div>
            {newsError &&
                <h1>Произошла ошибка</h1>
            }
            {isNewsLoading
                ? <Loader size={40} loading={isNewsLoading}/>
                : <div>
                    <button onClick={() => navigate('/main')}>Back</button>
                    <h1>Страница Новости {news?.id} Заголовок {news?.title}</h1>
                    <div>{news?.source_id}</div>
                    <img
                        src={news?.image}
                        alt="Изображение к новости"
                        width="350"
                        onError={({currentTarget}) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = 'https://tsul.uz/images/default-news-image.png';
                        }}
                    />
                </div>
            }

        </div>
    );
};

export default NewsItemPage;