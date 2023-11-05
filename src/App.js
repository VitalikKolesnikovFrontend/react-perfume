import React from "react";
import axios from "axios"
import  Card  from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')

  
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://65463d4ffe036a2fa95560c4.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    // axios.get('https://65463d4ffe036a2fa95560c4.mockapi.io/cart').then((res) => {
    //   setCartItems(res.data);
    // });
  }, []);

  const onAddCart = (obj) => {
    axios.post('https://65463d4ffe036a2fa95560c4.mockapi.io/cart', obj);
    setCartItems([...cartItems, obj])
  }

  const onRemoveItem = (id) => {
    // axios.delete(`https://65463d4ffe036a2fa95560c4.mockapi.io/cart${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
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
