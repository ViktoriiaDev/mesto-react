import trash from '../images/trash.svg';

const Card = (props) => {
  
  const handleCardClick = () => {
    props.onCardClick(props.card)
  }

  return (
    <li className="cards__item">
      <div onClick={handleCardClick} className="cards__item-image-container">
        <img className="cards__item-image" src={props.card.link} alt="/" />
      </div>
      <button className="cards__trash-button">
        <img src={trash} alt="Урна" />
      </button>
      <div className="cards__item-description">
        <h2 className="cards__item-title">{props.card.name}</h2>
        <div>
          <button className="cards__item-button" type="button"></button>
          <div className="cards__item-likes">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card