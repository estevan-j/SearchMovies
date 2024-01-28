import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";
import SingleMovie from "../components/SingleMovie";


export function MyRoutes() {
    return (<BrowserRouter>
        <Routes>
            <Route exact path="/" element={<MainPage/>} />
            <Route exact path="/movie/:id" element={<SingleMovie />} />
        </Routes>
    </BrowserRouter>);
}