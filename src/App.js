import React from "react";
import  Card  from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')

  
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://65463d4ffe036a2fa95560c4.mockapi.io/items').then((res) => {
      return res.json();
    }).then((json) => {
      setItems(json)
    })
  }, []);

  const onAddCart = (obj) => {
    setCartItems([...cartItems, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по товару "${searchValue}"` : 'ВСЕ ТОВАРЫ'}</h1>
          <div className="search-block d-flex">
            <img className="search" src="/img/search.svg" alt="search"/>
            <input onChange={onChangeSearchInput} placeholder="Поиск..."/>
          </div>
        </div>
        <div className="perfume d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((i, index) => (
            <Card 
            key={index}
            title={i.title} 
            price={i.price} 
            image={i.image} 
            onFavorite={() => console.log('Добавили в закладки')} 
            onPlus={(obj) => onAddCart(obj)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
