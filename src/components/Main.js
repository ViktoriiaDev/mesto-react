import React from 'react';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';
import { api } from '../utils/api.js'
import Card from './Card';

const Main = ({ onAddPlace, onCardClick, onEditProfile, onEditAvatar }) => {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
      .then(result => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar)
      })
      .catch((err) => {
        console.log(err);
      });
      api.getInitialCards()
      .then(result => {
        setCards(result);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__avatar-image" src={userAvatar} alt={userName} />
          <div className="profile__avatar-edit">
            <img className="profile__avatar-edit-pencil" src={edit} alt="Карандаш" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__info-top">
            <h1 className="profile__info-title">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}>
              <img className="profile__edit-button-pencil" src={edit} alt="Карандаш" />
            </button>
          </div>
          <h2 className="profile__info-subtitle">{userDescription}</h2>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}>
          <img className="profile__add-button-plus" src={plus} alt="Плюс" />
        </button>
      </section>

      <section className="cards">
        <ul className="cards__list">
         {cards.map(item => {
            return <Card card={item} key={item._id} onCardClick={onCardClick}/>
          })} 
        </ul>
      </section>
    </main>
  )
}

export default Main