import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import FashionPage from "../../pages/FashionPage";
import NewsItemPage from "../../pages/NewsItemPage/NewsItemPage";
import TechnologyPage from "../../pages/TechnologyPage";
import SportPage from "../../pages/SportPage";
import NewsItemFashionPage from "../../pages/NewsItemPage/NewsItemFashionPage";
import NewsItemTechnologyPage from "../../pages/NewsItemPage/NewsItemTechnologyPage";
import NewsItemSportPage from "../../pages/NewsItemPage/NewsItemSportPage";
import NewsItemKarpovPage from "../../pages/NewsItemPage/NewsItemKarpovPage";
import KarpovvPage from "../../pages/KarpovvPage";
import {Error} from "../../pages/Error";

const Router:FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/fashion" element={<FashionPage />}/>
            <Route path="/technology" element={<TechnologyPage />}/>
            <Route path="/sport" element={<SportPage />}/>
            <Route path="/karpov" element={<KarpovvPage />}/>
            <Route path="/:id" element={<NewsItemPage />}/>
            <Route path="/fashion/:id" element={<NewsItemFashionPage />}/>
            <Route path="/technology/:id" element={<NewsItemTechnologyPage />}/>
            <Route path="/sport/:id" element={<NewsItemSportPage />}/>
            <Route path="/karpov/:id" element={<NewsItemKarpovPage />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    );
};

export default Router;