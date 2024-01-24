import "./App.css";
import "./utils.css";
import { Header } from "./mycomponents/Header/Header.js";
import { Main } from "./mycomponents/Main/Main.js";
import { Footer } from "./mycomponents/Footer/Footer.js";
import { Signin } from "./mycomponents/Sigin/Signin.js";
import { CustomPC } from "./mycomponents/Custom PC/Custom_PC.js";
import { AllCategories } from './mycomponents/All Categories/AllCategories.js';
import { CategoryItem } from "./mycomponents/Category-components/CategoryItem.js";
import {
  BrowserRouter as
  Router,
  Routes,
  Route
} from "react-router-dom";

 function App(){
  return (
    <>
      <Router>
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
