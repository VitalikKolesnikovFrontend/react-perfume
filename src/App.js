
function App() {
  return (
    <div className="wrapper clear">
      
      <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div className="headerInfo">
            <h3>LUX PERFUME</h3>
            <p>МАГАЗИН ЛЮКСОВОЙ ПАРФЮМЕРИИ</p>
          </div>
        </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cart"/>
              <span>1205 RU</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="user"/>
            </li>
          </ul>
      </header>
      <div className="content p-45">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>ВСЕ ТОВАРЫ</h1>
          <div className="search-block d-flex">
            <img className="search" src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="perfume d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart2.svg" alt="heart1"/>
            </div>
            <img width={133} height={112} src="/img/1.jpg" alt="1"/>
            <h5>PANI WALEWSKA <br/> Classic духи</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>ЦЕНА:</span>
                <b>8 199 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
          <div className="card">
          <div className="favorite">
              <img src="/img/heart1.svg" alt="heart1"/>
            </div>
            <img width={133} height={112} src="/img/2.jpg" alt="1"/>
            <h5>ANTONIO BANDERAS <br/> Blue Seduction</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>ЦЕНА:</span>
                <b>4 199 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
          <div className="card">
          <div className="favorite">
              <img src="/img/heart1.svg" alt="heart1"/>
            </div>
            <img width={133} height={112} src="/img/3.jpg" alt="1"/>
            <h5>Lanvin Eclat <br/> D'Arpege</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>ЦЕНА:</span>
                <b>2 199 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
          <div className="card">
          <div className="favorite">
              <img src="/img/heart1.svg" alt="heart1"/>
            </div>
            <img width={133} height={112} src="/img/4.jpg" alt="1"/>
            <h5>GIORGIO ARMANI <br/> Acqua di Gioia</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>ЦЕНА:</span>
                <b>12 199 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
