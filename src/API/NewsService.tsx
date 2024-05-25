import axios from "axios";
import {IAll} from "../types/types";

export default class NewsService {
    static async getNews()  {
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
            return response.data.items
        } catch (e) {
            alert(e)
        }
    }
}