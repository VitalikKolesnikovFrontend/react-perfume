import React from 'react';
import styles from './Card.module.scss'

function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);
    
    const onClickPlus = () => { 
        setIsAdded(!isAdded)
    }



    return (
        <div className={styles.card}>
                <div className="favorite" onClick={props.onFavorite}>
                    <img className="cu-p" src="/img/heart1.svg" alt="heart1"/>
                </div>
                <img width={133} height={112} src={props.image} alt="1"/>
                <h5>{props.title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>ЦЕНА:</span>
                        <b>{props.price} руб.</b>
                    </div>
                        <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/btncheked.svg" : "/img/btn.svg"} alt="plus"/>
                </div>
        </div>    
    );
};

export default Card;

