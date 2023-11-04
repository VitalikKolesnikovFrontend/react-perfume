function Drawer({ onClose , items = [] }) {
    return (
        
      <div className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/remove.svg" alt="remove"/></h2>
        
        <div className="items">
          {items.map((i) => (
                     <div className="cartItem d-flex align-center mb-20">
                   
                      <img className="mr-20" width={70} height={70} src={i.image} alt="1"/>
                      <div className="mr-20 flex">
                        <p className="mb-5">{i.title}<br/> Classic духи</p>
                        <b>{i.price}руб.</b>
                      </div>
                      <img className="removeBtn" src="/img/remove.svg" alt="remove"/>
                    </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>22050 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div></div>
              <b>1070 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow2.svg" alt="arrow"/> </button>
        </div>
        </div>
      </div>
    );
}

export default Drawer;