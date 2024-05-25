import React, {useEffect, useState} from 'react';
import './App.css';
import NewsList from "./components/NewsList";
import {IAll, INews} from "./types/types";
import axios from "axios";

function App() {
    const [news, setNews] = useState<INews[]>([])

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
            setNews(response.data.items)
        } catch (e) {
            alert(e)
        }
    }
    return (
    <div className="App">
        <NewsList news={news}/>
    </div>
  );
}

export default App;
