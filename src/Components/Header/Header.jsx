import React from "react";
import s from "./Header.module.css";
import icon_call from "./images_header/call.png";
import icon_mail from "./images_header/mail.png";
import icon_instagram from "./images_header/icons8-instagram-50.png";
import icon_telegram from "./images_header/icons8-телеграм-50.png";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import icon_map from "./images_header/maps-and-flags.png"
import icon_info from "./images_header/icons8-информация-48.png"
import icon_job from "./images_header/icons8-работа-64.png"
import icon_obraz from "./images_header/icons8-образование-64.png"
import icon_courses from "./images_header/icons8-courses-64.png"
import icon_about_me from "./images_header/icons8-обо-мне-64.png"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <header>
      <div className={s.textes}>


      <button onClick={() => handleLanguageChange("en")}>en</button>
      <button onClick={() => handleLanguageChange("ru")}>ru</button>
        <h2 className={s.Adddres}>{t('КОНТАКТЫ')}</h2>

        
        <div className={s.textes_footer}>
          <h3>
           
            <img src={icon_call} alt="icon_call" /> +374 93-781-8-=74
          </h3>
          <h3 className={s.mail}>
           
            <img src={icon_mail} alt="icon_mail" />{" "}
            <h3 className={s.maff}>web379-siti@mail.ru</h3>
          </h3>

          <Link className={s.insta}  to="https://www.instagram.com/dvo196/">
          <h3 className={s.instagram}>
            
            <img
              className={s.icon_instagram} src={icon_instagram} alt="icon_instagram"
            />
            <h3 className={s.dvo196}>Dvo196</h3>
          </h3>
             </Link>          
          <h3>
            
            <img
              className={s.icon_telegram}
              src={icon_telegram}
              alt="icon_telegram"
            />
            <h3 className={s.dvo196}>Dvo196</h3>
          </h3>

        </div>
      <Main/>
      <Footer/>
      </div>
            <div>
              <div className={s.adasd}>
                <h1> {t('МИНАСЯН ДАВИТ')}</h1>
                <h2>{t('FRONT-END РАЗРАБОТЧИК')}</h2>
                <div className={s.images_textes}>
                <img className={s.img} src={icon_map} alt="icon_map" />
                  <h4 className={s.erevan}>{t('Ереван-Давташен')}</h4>
                <img className={s.icon_info} src={icon_info} alt="icon_info" />
                <h4 className={s.erevan}>{t('Возвраст 15лет')}</h4>
                </div>

                <h3 className={s.opit}>{t('ОПЫТ РАБОТЫ')}</h3>
                <div className={s.line}>
                </div>
                  <img className={s.icon_job} src={icon_job} alt="icon_job" />
                  <h4 className={s.beril}>{t('Опыта нету но собрал много макетов')}</h4>


                  
              </div>
            </div>
      <div className={s.Header}></div>
    </header>
  );
}

export default Header;
