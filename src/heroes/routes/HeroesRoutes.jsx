import NavBar from "../../ui/components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import {DcPage, MarvelPage, SearchPage, Hero} from '../pages'
/* import MarvelPage from "../pages/MarvelPage";
import DcPage from "../pages/DcPage";
import Search from "../pages/SearchPage";
import Hero from "../pages/Hero"; */

const HeroesRoutes = () => {
  
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage></MarvelPage>}></Route>
          <Route path="dc" element={<DcPage></DcPage>}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<Hero />}></Route>
          <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
