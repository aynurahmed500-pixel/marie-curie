
const topics = {
    early: {
        number: "01",
        title: "Ранните години",
        text: "Мария Склодовска е родена на 7 ноември 1867 г. във Варшава. Израства в семейство, което цени образованието, и проявява силен интерес към науката. Възможностите за висше образование на жените в тогавашната Руска империя са ограничени. Затова тя продължава образованието си чрез нелегални занятия и по-късно заминава за Париж."
    },

    paris: {
        number: "02",
        title: "Париж и Сорбоната",
        text: "През 1891 г. Мария пристига в Париж и започва да учи физика и математика в Сорбоната. Условията ѝ на живот са скромни, но тя се посвещава на обучението си. През 1894 г. среща физика Пиер Кюри. Двамата се женят през 1895 г. и по-късно работят заедно върху изследванията на радиоактивността."
    },

    discovery: {
        number: "03",
        title: "Полоний и радий",
        text: "През 1898 г. Мария и Пиер Кюри обявяват откриването на два химични елемента — полоний и радий. Полоният е наречен в чест на родната Полша на Мария. Изследванията им допринасят за развитието на науката за радиоактивността и променят разбирането за свойствата на атомите."
    },

    nobel: {
        number: "04",
        title: "Двете Нобелови награди",
        text: "През 1903 г. Мария Кюри получава Нобелова награда за физика заедно с Пиер Кюри и Анри Бекерел за изследванията върху радиоактивността. През 1911 г. получава Нобелова награда за химия за откриването на полония и радия и за изследванията върху радия. Тя е първата жена, получила Нобелова награда, и първият човек, удостоен с награди в две различни научни области."
    },

    war: {
        number: "05",
        title: "Науката по време на война",
        text: "По време на Първата световна война Мария Кюри организира използването на мобилни рентгенови апарати, с които медицинските екипи могат да изследват ранени войници. Тя участва в оборудването на превозни средства и обучава медицински персонал да работи с апаратурата. Така научните знания намират непосредствено приложение в медицината."
    },

    legacy: {
        number: "06",
        title: "Наследството",
        text: "Мария Кюри умира през 1934 г., но работата ѝ оставя трайна следа във физиката, химията и медицината. През 1995 г. останките ѝ са пренесени в Пантеона в Париж — признание за значението на нейния принос. Историята ѝ остава пример за научна отдаденост, упоритост и преодоляване на бариерите пред жените в науката."
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalLabel = document.getElementById("modalLabel");
const modalNumber = document.getElementById("modalNumber");

const topicButtons = document.querySelectorAll("[data-topic]");
const closeButtons = document.querySelectorAll("[data-close]");

let activeButton = null;

function openTopic(button) {
    const topic = topics[button.dataset.topic];

    if (!topic) return;

    if (activeButton === button && !modal.hidden) {
        closeModal();
        return;
    }

    modalTitle.textContent = topic.title;
    modalText.textContent = topic.text;
    modalLabel.textContent = "МАРИЯ КЮРИ · БЕЛЕЖКИ";
    modalNumber.textContent = `БЕЛЕЖКА № ${topic.number}`;

    topicButtons.forEach(item => {
        item.classList.toggle("selected", item === button);
        item.setAttribute("aria-pressed", String(item === button));
    });

    activeButton = button;
    modal.hidden = false;
}

function closeModal() {
    modal.hidden = true;

    topicButtons.forEach(button => {
        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
    });

    activeButton = null;
}

topicButtons.forEach(button => {
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
        openTopic(button);
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});
