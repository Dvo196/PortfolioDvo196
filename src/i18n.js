import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "КОНТАКТЫ": "Contacts",
      "МИНАСЯН ДАВИТ": "MINASYAN DAVIT",
      "FRONT-END РАЗРАБОТЧИК": "FRONT-END DEVOLOPER",
      "Армения-Ереван" : "Armenia-Erevan",
      "Возвраст 15лет" : "Age 15 years",
      "ОПЫТ РАБОТЫ": "EXPERIENCE",
      "ОБРАЗОВАНИЕ" : "EDUCATION",
      "Опыта нету но собрал много макетов" : "I have no experience, but I have collected a lot of layouts",
      "Учусь в Ереванский сельскохозяйственный университете" : "I study at Yerevan Agricultural University",
      "Закончил среднюю школу" : "Graduated from high school",
      "КУРСЫ" : "COURSES",
      "ЯЗЫКИ" : "LANGUAGES",
      "Английский" : "English",
      "B2 - Высше среднего" : "B2 - Above average",
      "Русский" : "Russian",
      "C1 - Продвинутый" : "C1 - Advanced",
      "НАВЫКИ" : "SKILLS",
      "О СЕБЕ" : "ABOUT ME",
      "Работаю по различным макетам. Умею разбиратся в чужом коде. Опыт работы нет. Введу деловую переписку на русском языке" :  "I work on various layouts. I can understand someone else's code. No work experience. I will enter business correspondence in Russian language",
      "Адаптивная Верстка" : "Adaptive layout",
      "Мои работы" : "My works",
      "HTML CSS Свадьба" : "HTML CSS Wedding",
      "JS погода" : "JS weather",
      "React магазин телефонов" : "React phone store",
      "React + Js список дел" : "React + Js to-do list"
    }
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;
