import React, {FC, useEffect, useState} from 'react';
import {INews} from "../types/types";
import NewsList from "../components/NewsList/NewsList";
import NewsService from "../API/NewsService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";

const FashionPage:FC = () => {
    const [news, setNews] = useState<INews[] | any>([])
    const [fetchNews, isNewsLoading, newsError] = useFetching(async () => {
        const news = await NewsService.getNews('https://frontend.karpovcourses.net/api/v2/ru/news/3');
        setNews(news);
    })

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div className="App">
            {newsError &&
                <h1>Произошла ошибка</h1>
            }
            {isNewsLoading
                ? <Loader size={40} loading={isNewsLoading}/>
                : <NewsList news={news} route={'/fashion/'}/>
            }
        </div>
    );
};

export default FashionPage;