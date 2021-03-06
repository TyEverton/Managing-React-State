import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products"
import {Routes, Route} from "react-router-dom"
import Cart from "./Cart"
import Detail from "./Detail"


export default function App() { 

  return (
 <div>
      <div className="content">
        <Header />
        <main>
          <Routes>
             <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
             <Route path="/:category/:id" element={<Products />} />
             <Route path="/detail" element={<Detail />} />
             <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
  </div>
  );
}
