import s from "./Main.module.css"
import icon_obraz from "./images_main/icons8-образование-64.png"
import icon_courses from "./images_main/icons8-courses-64.png"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';





function Main() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
    return(

        <div className={s.info_footer}>
            <h2 className={s.language}>{t('ЯЗЫКИ')}</h2>
            <div className={s.sadasd}>
              <h3 className={s.about}>{t('Английский')}</h3>
              <h4 className={s.B2}>{t('B2 - Высше среднего')}</h4>
              <div className={s.flex1}>
                <div className={s.boorder1}></div>
                <div className={s.boorder2}></div>
                <div className={s.boorder3}></div>
                <div className={s.boorder4}></div>
                <div className={s.boorder5}></div>

              </div>
            </div>
            <h3> {t('Русский')}</h3>
            <h4 className={s.C1}>{t('C1 - Продвинутый')}</h4>

            <div className={s.flex1}>
              <div className={s.boorder1}></div>
              <div className={s.boorder2}></div>
              <div className={s.boorder3}></div>
              <div className={s.boorder5_4}></div>
              <div className={s.boorder4}></div>

            </div>

            <div className={s.adasd}>

            <h3 className={s.opit}>{t('ОБРАЗОВАНИЕ')}</h3>
            
                <div className={s.line}>
                </div>
                  <img className={s.icon_job} src={icon_obraz} alt="icon_job" />
                  <h4 className={s.obraz}>2025</h4>
                  <div className={s.textes_obrazovanie}>
                  <h4 className={s.univer}>{t('Учусь в Ереванский сельскохозяйственный университете')}</h4>
                  <h4 className={s.name}>{t('Закончил среднюю школу')}</h4>
                  </div>


                    <h3 className={s.opit}>{t('КУРСЫ')}</h3>
                <div className={s.line2}>
                </div>
                  <img className={s.icon_job} src={icon_courses} alt="icon_courses" />
                  <h4 className={s.obraz}>2023</h4>
                  <div className={s.textes_obrazovanie}>
                  <Link  to="https://foreach.am/hy-am"> 
                  <h4 className={s.univer}>ForEach</h4> 
                  </Link>
                  <h4 className={s.name}>HTML, CSS, Responsive design, Sass/SCSS, Bootstrap, PSD/Figma/XD</h4>
                  </div>
                  <h4 className={s.obraz}>2023</h4>
                  <div className={s.textes_obrazovanie}>
                  <Link  to="https://foreach.am/hy-am"> 
                  <h4 className={s.univer}>ForEach</h4> 
                  </Link>                  
                  <h4 className={s.name}>JavaScript, EcmaScript (ES6+)</h4>
                  </div>
                  <h4 className={s.obraz}>2023</h4>
                  <div className={s.textes_obrazovanie}>
                  <Link  to="https://foreach.am/hy-am"> 
                  <h4 className={s.univer}>ForEach</h4> 
                  </Link>                  
                  <h4 className={s.name}>JavaScript Advanced</h4>
                  </div>
                  <h4 className={s.obraz}>2023</h4>
                  <div className={s.textes_obrazovanie}>
                  <Link  to="https://foreach.am/hy-am"> 
                  <h4 className={s.univer}>ForEach</h4> 
                  </Link>                 
                   <h4 className={s.name}>React.JS, Redux, TypeScript</h4>
                  </div>
            </div>
            </div>

    )
}
export default Main
