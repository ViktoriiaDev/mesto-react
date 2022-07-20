import React from "react";
import trash from "../images/trash.svg";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

const Card = ({ card, onCardClick }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `cards__item-button ${
    isLiked ? "cards__item-button_active" : ""
  }`;

  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <li className="cards__item">
      <div onClick={handleCardClick} className="cards__item-image-container">
        <img className="cards__item-image" src={card.link} alt="/" />
      </div>
      {isOwn && (
        <button className="cards__trash-button">
          <img src={trash} alt="Урна" />
        </button>
      )}

      <div className="cards__item-description">
        <h2 className="cards__item-title">{card.name}</h2>
        <div>
          <button className={cardLikeButtonClassName} type="button"></button>
          <div className="cards__item-likes">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
