import React from "react";
import s from "./Footer.module.css"
import icon_about_me from "./images_footer/icons8-обо-мне-64.png"
import { useTranslation } from 'react-i18next';


function Footer() {

  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };


    return ( 
        <>
        
        
           <div className={s.info_footer}>
        <h2 className={s.language}>{t('НАВЫКИ')}</h2> 
            <div>
              <h3 className={s.about}>HTML, CSS, JS</h3>
              <div className={s.flex}>
                <div className={s.boorder1}></div>
                <div className={s.boorder2}></div>
                <div className={s.boorder3}></div>
                <div className={s.boorder4}></div>
              </div>
            </div>
            <h3>React</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3>JavaScript</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3 className={s.Specials}>Sass</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3_sass}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3 className={s.Contact}>Less</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3_sass}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3 className={s.Contact}>TypeScript</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3_sass}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3 className={s.Contact}>Redux</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3_sass}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3 className={s.Contact}>Bootstrap</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3_sass}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3 className={s.Contact}>Json-Server</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3_sass}></div>
              <div className={s.boorder4}></div>
            </div>
            <h3 className={s.Contact}>{t('Адаптивная Верстка')}</h3>
            <div className={s.flex}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3}></div>
              <div className={s.boorder4}></div>
            </div>

                  <div className={s.adasd}>

                  <h3 className={s.opit}>{t('О СЕБЕ')}</h3>
                      <div className={s.line}>
                      </div>
                        <img className={s.icon_job} src={icon_about_me} alt="icon_job" />
                        <i className={s.obraz2}> {t('Работаю по различным макетам. Умею разбиратся в чужом коде. Опыт работы нет. Введу деловую переписку на русском языке')}</i>  
                  </div>
          </div> 
        </>
     );
}

export default Footer;