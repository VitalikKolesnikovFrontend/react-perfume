import React from 'react';
import styles from './Card.module.scss'

function Card( { onFavorite, title, image, price, onPlus } ) {

    const [isAdded, setIsAdded] = React.useState(false);
    
    const onClickPlus = () => { 
        onPlus({title, image, price});
        setIsAdded(!isAdded)
    }



    return (
        <div className={styles.card}>
                <div className="favorite" onClick={onFavorite}>
                    <img className="cu-p" src="/img/heart1.svg" alt="heart1"/>
                </div>
                <img width={133} height={112} src={image} alt="1"/>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>ЦЕНА:</span>
                        <b>{price} руб.</b>
                    </div>
                        <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/btncheked.svg" : "/img/btn.svg"} alt="plus"/>
                </div>
        </div>    
    );
};

export default Card;

