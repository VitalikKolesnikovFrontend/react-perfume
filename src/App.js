import React from "react";
import  Card  from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://65463d4ffe036a2fa95560c4.mockapi.io/items').then((res) => {
      return res.json();
    }).then((json) => {
      setItems(json)
    })
  }, []);


  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)}/> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-45">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>ВСЕ ТОВАРЫ</h1>
          <div className="search-block d-flex">
            <img className="search" src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="perfume d-flex flex-wrap">
          {items.map((i) => (
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
