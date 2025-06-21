

import { useContext, type JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PizzaList from "./components/PizzaList";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeContext } from "./contexts/ThemeContext";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/Succsses";
import Footer from "./components/Footer";
import './index.css';
import "./App.css"; // CSS dosyasını unutma

export default function App(): JSX.Element {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={mode === "light" ? "bg-light text-dark" : "bg-dark text-white"}>
      <BrowserRouter>
        <Header />
         <ThemeSelector /> 

        <div className="container my-4">
          <Routes>
            <Route path="/" element={<PizzaList />} />
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/payment" element={<PaymentPage/>} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
