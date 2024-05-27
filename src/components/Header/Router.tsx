import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import FashionPage from "../../pages/FashionPage";
import NewsItemPage from "../../pages/NewsItemPage/NewsItemPage";
import TechnologyPage from "../../pages/TechnologyPage";
import MusicPage from "../../pages/MusicPage";
import KarpovPage from "../../pages/KarpovPage";
import NewsItemFashionPage from "../../pages/NewsItemPage/NewsItemFashionPage";
import NewsItemTechnologyPage from "../../pages/NewsItemPage/NewsItemTechnologyPage";

const Router:FC = () => {
    return (
        <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/fashion" element={<FashionPage />}/>
            <Route path="/technology" element={<TechnologyPage />}/>
            <Route path="/music" element={<MusicPage />}/>
            <Route path="/karpov" element={<KarpovPage />}/>
            <Route path="/main/:id" element={<NewsItemPage />}/>
            <Route path="/fashion/:id" element={<NewsItemFashionPage />}/>
            <Route path="/technology/:id" element={<NewsItemTechnologyPage />}/>
            <Route path="*" element={<MainPage />}/>
        </Routes>
    );
};

export default Router;