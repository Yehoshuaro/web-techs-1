const translations = {
    en: {
        aboutUs: "About Us",
        services: "Services",
        contacts: "Contacts",
        en: "Eng",
        rus: "Rus",
        kaz: 'Kaz',
        darkMode: "Dark Mode",

        mainText: "Frequently Asked Questions (FAQ)",

        summaryOne: "What is this website about?",
        summaryOneTxt: "This website is designed to provide information about services and products of Properties Pavilion.",

        summaryTwo: "How can I contact support?",
        summaryTwoTxt: "You can contact support through our",
        supportEmail: "support email",

        summaryThree: "What payment methods do you accept?",
        summaryThreeTxt: "We accept credit cards, debit cards, and PayPal.",

        summaryFour: "How to fill the form for property selling?",
        summaryFourTxt: "You can go to the main page and scroll down to our services, there you can find selling form.",

        summaryFive: "When will I receive an answer after submitting the form?",
        summaryFiveTxt: "Once you send the form, one of our agents will contact you in a day or two."
    },
    ru: {
        aboutUs: "О нас",
        services: "Услуги",
        contacts: "Контакты",
        en: "Анг",
        rus: "Рус",
        kaz: 'Каз',
        darkMode: "Темная тема",

        mainText: "Часто задаваемые вопросы",

        summaryOne: "О чем этот сайт?",
        summaryOneTxt: "Этот сайт предназначен для предоставления информации об услугах и продуктах Properties Pavilion",

        summaryTwo: "Как я могу связаться со службой поддержки?",
        summaryTwoTxt: "Вы можете связаться со службой поддержки по",
        supportEmail: "электронной почте",

        summaryThree: "Какие способы оплаты вы принимаете?",
        summaryThreeTxt: "Мы принимаем кредитные карты, дебетовые карты и PayPal",

        summaryFour: "Как заполнить форму на продажу недвижимости?",
        summaryFourTxt: "Вы можете перейти на главную страницу и прокрутить вниз до раздела «Наши услуги», там вы найдете форму продажи",

        summaryFive: "Когда я получу ответ после отправки формы?",
        summaryFiveTxt: "После того, как вы отправите форму, один из наших агентов свяжется с вами через день или два"
    },
    kz: {
        aboutUs: "Біз туралы",
        services: "Қызметтер",
        contacts: "Байланыс",
        en: "Ағл",
        rus: "Орс",
        kaz: 'Қаз',
        darkMode: "Қараңғы тема",

        mainText: "Жиі қойылатын сұрақтар",

        summaryOne: "Бұл веб-сайт не туралы?",
        summaryOneTxt: "Бұл веб-сайт Properties Pavilion қызметтері мен өнімдері туралы ақпарат беруге арналған",

        summaryTwo: "Қолдау қызметіне қалай хабарласуға болады?",
        summaryTwoTxt: "Қолдау көрсету қызметін қолдау көрсету",
        supportEmail: "электрондық поштасы",

        summaryThree: "Сіз қандай төлем әдістерін қабылдайсыз?",
        summaryThreeTxt: "Біз несие карталарын, дебеттік карталарды және PayPal қабылдаймыз",

        summaryFour: "Мүлікті сатуға арналған нысанды қалай толтыруға болады?",
        summaryFourTxt: "Сіз негізгі бетке өтіп, біздің қызметтерге төмен қарай жылжып, сату формасын таба аласыз",

        summaryFive: "Форманы жібергеннен кейін жауап қашан аламын?",
        summaryFiveTxt: "Форманы жібергеннен кейін біздің агенттеріміздің бірі сізбен бір-екі күннен кейін хабарласады"
    },
};

function switchLanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}