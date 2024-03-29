import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/pages/main/main";
import Film from "./components/pages/film/film";
import Account from "./components/pages/account/account";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/molecules/header/header";
import {observer} from "mobx-react";
import Footer from "./components/molecules/footer/footer.";
import Settings from "./components/pages/settings/settings";
import RegisterModal from "./components/pages/registerModal/registerModal";
import store from "./stores/store";

const App: React.FC = observer(() => {

    const {getDataFromLocalStorage} = store;
    useEffect(() => {
        getDataFromLocalStorage();
    });
    return (
            <BrowserRouter>

                <Header/>
                <RegisterModal/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path={`Film`} element={<Film/>}/>
                    <Route path="/Account" element={<Account/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        );
    })
;

export default App;
