import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import FashionPage from "../../pages/FashionPage";
import TechnologyPage from "../../pages/TechnologyPage";
import SportPage from "../../pages/SportPage";
import NewsItemPage from "../../pages/NewsItemPage/NewsItemPage";

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
            <Route path="/:namePage/:id" element={<NewsItemPage />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    );
};

export default Router;