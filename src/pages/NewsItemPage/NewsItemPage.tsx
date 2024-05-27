import React, {FC, useEffect, useState} from 'react';
import {INews} from "../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import NewsService from "../../API/NewsService";
import Loader from "../../components/UI/Loader/Loader";
import './NewsItemPage.css'

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
                : <div className="container-my news-item-page">
                    <button className="btn-back" onClick={() => navigate('/main')}>Назад</button>
                    <h1 className="news-item-page-title">{news?.title}</h1>
                    <div>
                        <span className="news-item-page-category">Категория: {news?.category_id}</span>
                        <span>{news?.date.slice(0, 21)}</span>
                    </div>
                    <div className="news-item-page-body">
                        <img
                            src={news?.image}
                            alt="Изображение к новости"
                            width="1000px"
                            onError={({currentTarget}) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = 'https://tsul.uz/images/default-news-image.png';
                            }}
                        />
                        <div>
                            <div className="news-item-page-body-description">{news?.description}</div>
                            <span className="news-item-page-source">Источник: {news?.source_id}</span>
                        </div>
                    </div>

                </div>
            }

        </div>
    );
};

export default NewsItemPage;