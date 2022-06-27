import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <Header />
      <Main
        onCardClick={setSelectedCard}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        submitButtonText={'Сохранить'}
      >
        <>
          <input
            placeholder="Имя"
            name="name"
            id="name-input"
            className="popup__form-input popup__form-input_input_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__form-input-error name-input-error"></span>
          <input
            placeholder="Профессия"
            name="description"
            id="description-input"
            className="popup__form-input popup__form-input_input_description"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__form-input-error description-input-error"></span>
        </>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        submitButtonText={'Создать'}
      >
        <>
          <input
            placeholder="Название"
            name="place-name"
            id="place-input"
            className="popup__form-input popup__form-input_place_name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__form-input-error place-input-error"></span>
          <input
            placeholder="Ссылка на картинку"
            name="place-link"
            id="place-link"
            type="url"
            className="popup__form-input popup__form-input_place_link"
            required
          />
          <span className="popup__form-input-error place-link-error"></span>
        </>
      </PopupWithForm>
      <PopupWithForm name="remove" title="Вы уверены" submitButtonText="Да" />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        submitButtonText={'Сохранить'}
      >
        <>
          <input
            placeholder="Ссылка на аватар"
            name="avatar"
            id="avatar-link"
            type="url"
            className="popup__form-input popup__form-input_avatar_link"
            required
          />
          <span className="popup__form-input-error avatar-link-error"></span>
        </>
      </PopupWithForm>
      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
