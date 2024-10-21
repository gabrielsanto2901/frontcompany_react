import { BrowserRouter, Route, Routes } from "react-router-dom";
import './global.scss'
import Contato from "./pages/contato";
import Home from "./pages/app";

export default function Navegacao(){
    return(
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>} />
            <Route path='/contato' element={<Contato/>} />
          </Routes>
      </BrowserRouter>

    )

}