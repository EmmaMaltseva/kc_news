import React, {FC, useEffect, useState} from 'react';
import {IAll, INews} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


type NewsItemPageParams = {
    id: number;
}

const NewsItemPage:FC = () => {

    const [news, setNews] = useState<INews | null>(null)
    // @ts-ignore
    const params = useParams<NewsItemPageParams>()
    const navigate = useNavigate();

    useEffect(() => {
        fetchNews()
    }, [])

    async function fetchNews() {
        try {
            const response = await axios.get<IAll>('https://frontend.karpovcourses.net/api/v2/ru/news/0')
            response.data.items.forEach((newsItem) => {
                const category = response.data.categories.find((category) => category.id === parseInt(newsItem.category_id));
                if (category) {
                    newsItem.category_id = category.name;
                }
                const source = response.data.sources.find((source) => source.id === parseInt(newsItem.source_id));
                if (source) {
                    newsItem.source_id = source.name;
                }
            });
            // @ts-ignore
            setNews(response.data.items[params.id])
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
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
    );
};

export default NewsItemPage;