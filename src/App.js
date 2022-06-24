
import headerLogo from './images/logo.svg';


function App() {
  return (
    <>
      <header className="header">
      <img className="header__logo" alt='Логотип' a href="#" src={headerLogo}/>
      </header>

      <main>
        <section className="profile">
          <div className="profile__avatar">
            {/* <img className="profile__avatar-image" src="<%=require('./images/kusto.jpg')%>" alt="Фотография Ж. Кусто" /> */}
            <div className="profile__avatar-edit">
              {/* <img className="profile__avatar-edit-pencil" src="<%=require('./images/edit.svg')%>" alt="Карандаш" /> */}
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__info-top">
              <h1 className="profile__info-title">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button">
                {/* <img className="profile__edit-button-pencil" src="<%=require('./images/edit.svg')%>" alt="Карандаш" /> */}
              </button>
            </div>
            <h2 className="profile__info-subtitle">Исследователь океана</h2>
          </div>
          <button className="profile__add-button" type="button">
            {/* <img className="profile__add-button-plus" src="<%=require('./images/plus.svg')%>" alt="Плюс"> */}
          </button>
        </section>

        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__copyright">&copy; 2020 Mesto Russia</div>
      </footer>

      <div className="popup popup_profile">
        <div className="popup__window popup__content">
          <button className="popup__close popup__close_profile" type="button">
            {/* <img className="popup__close-icon" src="<%=require('./images/close-icon.svg')%>" alt="Крест"> */}
          </button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="popup-form" noValidate>
            <input placeholder="Имя" name="name" id="name-input" className="popup__form-input popup__form-input_input_name"
              minLength="2" maxLength="40" required />
            <span className="popup__form-input-error name-input-error"></span>
            <input placeholder="Профессия" name="description" id="description-input"
              className="popup__form-input popup__form-input_input_description" minLength="2" maxLength="200" required />
            <span className="popup__form-input-error description-input-error"></span>
            <button className="popup__form-submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>


      <div className="popup popup_card">
        <div className="popup__window popup__content">
          <button className="popup__close popup__close_card" type="button">
            {/* <img className="popup__close-icon" src="<%=require('./images/close-icon.svg')%>" alt="Крест"> */}
          </button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__card-form" name="popup-card-form" noValidate>
            <input placeholder="Название" name="place-name" id="place-input"
              className="popup__form-input popup__form-input_place_name" minLength="2" maxLength="30" required />
            <span className="popup__form-input-error place-input-error"></span>
            <input placeholder="Ссылка на картинку" name="place-link" id="place-link" type="url"
              className="popup__form-input popup__form-input_place_link" required />
            <span className="popup__form-input-error place-link-error"></span>
            <button className="popup__form-submit popup__form-submit_disabled" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_remove">
        <div className="popup__window popup__content">
          <button className="popup__close popup__close_profile" type="button">
            {/* <img className="popup__close-icon" src="<%=require('./images/close-icon.svg')%>" alt="Крест"> */}
          </button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="popup-remove-form" noValidate>
            <button className="popup__form-submit" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__window popup__content">
          <button className="popup__close popup__close_profile" type="button">
            {/* <img className="popup__close-icon" src="<%=require('./images/close-icon.svg')%>" alt="Крест"> */}
          </button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="popup-avatar-form" noValidate>
            <input placeholder="Ссылка на аватар" name="avatar" id="avatar-link" type="url"
              className="popup__form-input popup__form-input_avatar_link" required />
            <span className="popup__form-input-error avatar-link-error"></span>
            <button className="popup__form-submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_picture">
        <div className="picture popup__content">
          <button className="popup__close popup__close_picture" type="button">
            {/* <img className="popup__close-icon" src="<%=require('./images/close-icon.svg')%>" alt="Крест"> */}
          </button>
          <img className="picture__image" src="/" alt="/" />
          <div className="picture__description"></div>
        </div>
      </div>

      <template id="cards__item">
        <li className="cards__item">
          <div className="cards__item-image-container">
            <img className="cards__item-image" src="/" alt="/" />
          </div>
          <button className="cards__trash-button">
            <img src="<%=require('./images/trash.svg')%>" alt="Урна" />
          </button>
          <div className="cards__item-description">
            <h2 className="cards__item-title"></h2>
            <div>
              <button className="cards__item-button" type="button"></button>
              <div className="cards__item-likes"></div>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
