function Header() {
    return (
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
    );
}

export default Header;