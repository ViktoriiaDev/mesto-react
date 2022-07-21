import React from 'react';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';
import Card from './Card';
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { api } from '../utils/api.js';


const Main = ({ onAddPlace, onCardClick, onEditProfile, onEditAvatar }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
      api.getInitialCards()
      .then(result => {
        setCards(result);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 

function handleCardDelete(card) {
  api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
  });
} 

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__avatar-image" src={currentUser.avatar} alt={currentUser.name} />
          <div className="profile__avatar-edit">
            <img className="profile__avatar-edit-pencil" src={edit} alt="Карандаш" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__info-top">
            <h1 className="profile__info-title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}>
              <img className="profile__edit-button-pencil" src={edit} alt="Карандаш" />
            </button>
          </div>
          <h2 className="profile__info-subtitle">{currentUser.about}</h2>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}>
          <img className="profile__add-button-plus" src={plus} alt="Плюс" />
        </button>
      </section>

      <section className="cards">
        <ul className="cards__list">
         {cards.map(item => {
            return <Card card={item} key={item._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          })} 
        </ul>
      </section>
    </main>
  )
}

export default Main