import "./App.css";
import "./utils.css";
import { Header } from "./mycomponents/Header/Header";
import { Main } from "./mycomponents/Main/Main";
import { Footer } from "./mycomponents/Footer/Footer";
import { Signin } from "./mycomponents/Sigin/Signin";
import { CustomPC } from "./mycomponents/Custom PC/Custom_PC";
import { AllCategories } from './mycomponents/All Categories/AllCategories';
import { CategoryItem } from "./mycomponents/Category-components/CategoryItem";
import {
  BrowserRouter as
  Router,
  Routes,
  Route
} from "react-router-dom";

 function App(){
  return (
    <>
      <Router basename="AKTECH">
        <Routes>
          <Route path="/" element={<><Header/><Main/><Footer/></>}/>
          <Route path="/custompc" element={<><Header/><CustomPC/><Footer/></>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/AllCategories" element={<><Header/><AllCategories/><Footer/></>} />
          <Route path="/category/:type" element={<><Header/><CategoryItem/><Footer/></>}></Route>
        </Routes>
      </Router>
    </>
  );
  }

export default App;
