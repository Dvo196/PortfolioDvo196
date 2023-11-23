import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "КОНТАКТЫ": "Contacts",
      "МИНАСЯН ДАВИТ": "MINASYAN DAVIT",
      "FRONT-END РАЗРАБОТЧИК": "FRONT-END DEVOLOPER",
      "Ереван-Давташен" : "Erevan-Davtashen",
      "Возвраст 15лет" : "Age 15 years",
      "ОПЫТ РАБОТЫ": "EXPERIENCE",
      "ОБРАЗОВАНИЕ" : "EDUCATION",
      "Опыта нету но собрал много макетов" : "I have no experience, but I have collected a lot of layouts",
      "Ереванский сельскохозяйственный университет" : "Yerevan Agricultural University",
      "Среднее (школа)" : "Secondary (school)",
      "Веб Дизайнер Программист" : "Web Designer Programmer",
      "КУРСЫ" : "COURSES",
      "ЯЗЫКИ" : "LANGUAGES",
      "Английский" : "English",
      "B2 - Высше среднего" : "B2 - Above average",
      "Русский" : "Russian",
      "C1 - Продвинутый" : "C1 - Advanced",
      "НАВЫКИ" : "SKILLS",
      "О СЕБЕ" : "ABOUT ME",
      "Работаю по различным макетам. Умею разбиратся в чужом коде. Опыт работы нет. Введу деловую переписку на русском языке" :  "I work on various layouts. I can understand someone else's code. No work experience. I will enter business correspondence in Russian language",
      "Адаптивная Верстка" : "Adaptive layout"
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
