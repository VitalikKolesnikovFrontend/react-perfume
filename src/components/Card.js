
function Card(props) {

    const onClickButton = () => {
        alert(props.title)
    }

    return (
        <div className="card">
                <div className="favorite">
                    <img className="cu-p" src="/img/heart1.svg" alt="heart1"/>
                </div>
                <img width={133} height={112} src={props.image} alt="1"/>
                <h5>{props.title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>ЦЕНА:</span>
                        <b>{props.price} руб.</b>
                    </div>
                    <button className="button" onClick={onClickButton}>
                        <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                    </button>
                </div>
        </div>    
    );
};

export default Card;

