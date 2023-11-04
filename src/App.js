import React from "react";
import  Card  from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {title: 'PANI WALEWSKA', price: 12999, image: '/img/1.jpg'},
  {title: 'ANTONIO BANDERAS', price: 10099, image: '/img/2.jpg'},
  {title: 'LANVIN Eclat', price: 12999, image: '/img/3.jpg'},
  {title: 'Giorgio Armani ', price: 10099, image: '/img/4.jpg'},
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-45">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>ВСЕ ТОВАРЫ</h1>
          <div className="search-block d-flex">
            <img className="search" src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="perfume d-flex">
          {arr.map((i) => (
            <Card 
            title={i.title} 
            price={i.price} 
            image={i.image} 
            onFavorite={() => console.log('Добавили в закладки')} 
            onPlus={() => console.log('Нажали на плюс')} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
