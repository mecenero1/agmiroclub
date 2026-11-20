/* =====================================================================
   AGMIROCLUB — настройки магазина.
   Всё, что нужно поменять (цены, размеры, контакты, реквизиты), — здесь.
   Сайт и документы (оферта, политика, согласие) берут данные из этого файла.
   ===================================================================== */
window.AGM = {
  brand: 'AGMIROCLUB',
  author: { name: '@mecenero', url: 'https://t.me/mecenero' }, // автор сайта
  url: 'https://mecenero1.github.io/leclub55/agmiroclub/',

  /* Контакты магазина. Пустые поля на сайте не показываются.
     Для заказов лучше почта на российском сервисе (Яндекс, Mail.ru):
     так персональные данные покупателей хранятся в России (152-ФЗ, ст. 18 ч. 5). */
  contacts: {
    email: '',        // например: 'agmiroclub@yandex.ru'
    telegram: 'agmiro777', // заказы и вопросы — Telegram без @
    channel: 'agmiroclub', // Telegram-канал бренда, без @
    phone: '',        // например: '+7 900 000-00-00'
    instagram: 'caseofagmiro', // ник без @; логотип Instagram на сайте не показываем — только текстовую ссылку со сноской
    tiktok: '',       // ник без @
    hours: ''         // режим работы, например: 'Отвечаем ежедневно с 10:00 до 22:00 по Москве' (ЗоЗПП, ст. 9)
  },

  /* Продавец — обязательно заполнить до начала продаж
     (Закон «О защите прав потребителей», ст. 8–9; Правила продажи № 2463, п. 20).
     Пока поле пустое, в документах на его месте стоит выделенная пометка. */
  seller: {
    name: '',          // 'ИП Иванов Иван Иванович' или 'Иванов Иван Иванович, самозанятый'
    inn: '',           // ИНН
    ogrn: '',          // ОГРНИП (для самозанятого оставьте пустым)
    regAuthority: '',  // кем зарегистрирован ИП, например: 'Межрайонная ИФНС России № 46 по г. Москве'
    address: '',       // адрес для претензий и возвратов
    email: '',         // почта для претензий и запросов по персональным данным
    phone: ''
  },

  /* Адрес вашего обработчика заказов (POST, JSON). Пока пусто —
     покупатель отправляет собранный заказ на почту или в Telegram сам. */
  orderEndpoint: '',

  delivery: {
    carrier: 'СДЭК',
    text: 'Доставляем по всей России службой СДЭК: в пункт выдачи или курьером до двери. Стоимость и срок рассчитываются по тарифам СДЭК и сообщаются при подтверждении заказа.'
  },
  payment: {
    text: 'Оплата онлайн по ссылке, которую мы отправим после подтверждения заказа. После оплаты вы получите кассовый чек на e-mail.'
  },
  /* Срок возврата товара надлежащего качества. По закону — не меньше 7 дней
     после получения (ЗоЗПП, ст. 26.1). Можно увеличить, но не уменьшить. */
  returnDays: 7,

  docsDate: '20.11.2026',

  products: [
    {
      id: 'tee', tab: 'Футболки', kind: 'Футболка', name: 'Summer Club', nameRu: 'Летний клуб', price: 5000,
      sizes: ['S', 'M', 'L', 'XL'], soldOut: [],
      motto: 'Летний клуб. С 2026 года.',
      about: 'Свободная футболка со спущенным плечом. На груди — AGMIRO и пальма, на спине — большой принт Summer Club.',
      /* Заполните — покажется в карточке. Пустые строки скрыты. */
      specs: { 'Состав': '', 'Плотность': '', 'Страна производства': '', 'Уход': '' },
      colors: [
        { id: 'navy',  label: 'Тёмно-синяя', hex: '#2F4560', theme: 'navy',  front: 'img/tee-navy-front.webp',  back: 'img/tee-navy-back.webp',  thumb: 'img/tee-navy-front-sm.webp',  print: 'На спине — остров, пальмы, солнце и надпись Summer Club (англ. «летний клуб»)' },
        { id: 'black', label: 'Чёрная',      hex: '#151515', theme: 'sand',  front: 'img/tee-black-front.webp', back: 'img/tee-black-back.webp', thumb: 'img/tee-black-front-sm.webp', print: 'Песочный принт: две пальмы' },
        { id: 'white', label: 'Белая',       hex: '#F3F1EC', theme: 'night', front: 'img/tee-white-front.webp', back: 'img/tee-white-back.webp', thumb: 'img/tee-white-front-sm.webp', print: 'Тёмно-синий принт: две пальмы' }
      ]
    },
    {
      id: 'hoodie', tab: 'Худи', kind: 'Худи', name: 'Dossier N° 001', nameRu: 'Досье № 001', price: 6500,
      sizes: ['XS', 'S', 'M', 'L', 'XL'], soldOut: [],
      motto: 'Дело № 001. Открыто в полночь.',
      about: 'Худи свободного кроя с капюшоном и карманом-кенгуру. Спереди — пометка Affaire N° 001, на спине — Dossier N° 001.',
      specs: { 'Состав': '', 'Плотность': '', 'Страна производства': '', 'Уход': '' },
      colors: [
        { id: 'black', label: 'Чёрное', hex: '#11141B', theme: 'studio', front: 'img/hoodie-black-front.webp', back: 'img/hoodie-black-back.webp', thumb: 'img/hoodie-black-front-sm.webp', print: 'Белая печать в стиле машинописи: Affaire N° 001 и Dossier N° 001 (франц. «дело № 001» и «досье № 001»)' }
      ]
    },
    {
      id: 'long', tab: 'Лонгслив', kind: 'Лонгслив', name: 'Mas Amor Por Favor', nameRu: 'Больше любви, пожалуйста', price: 6400,
      sizes: ['S', 'M', 'L'], soldOut: [],
      motto: 'Любви много не бывает.',
      about: 'Лонгслив свободного кроя. На груди — Nep Baby, на спине — большая красная надпись Mas Amor Por Favor.',
      specs: { 'Состав': '', 'Плотность': '', 'Страна производства': '', 'Уход': '' },
      colors: [
        { id: 'grey', label: 'Серый меланж', hex: '#C9C9C7', theme: 'stone', front: 'img/long-grey-front.webp', back: 'img/long-grey-back.webp', thumb: 'img/long-grey-front-sm.webp', print: 'Красная печать с эффектом потёртости: Nep Baby и Mas Amor Por Favor (исп. «больше любви, пожалуйста»)' }
      ]
    }
  ],

  /* Таблицы размеров, см. Пока пусто — таблица не показывается.
     Пример: tee: { cols: ['Ширина', 'Длина'], rows: { S: [58, 70], M: [60, 72] } } */
  sizeCharts: {
    tee: null,
    hoodie: null,
    long: null
  },

  /* Лукбук: фото и вещь на нём */
  looks: [
    { src: 'img/look-yerevan', caption: 'Ереван, на закате', product: 'tee', color: 'white', pos: '50% 60%' },
    { src: 'img/look-teal', caption: 'Летний день', product: 'tee', pos: '50% 35%' },
    { src: 'img/look-pool', caption: 'У бассейна', product: 'tee', color: 'black', pos: '50% 40%' },
    { src: 'img/look-hoodie-street', caption: 'На набережной', product: 'hoodie', color: 'black', pos: '50% 30%' },
    { src: 'img/look-long', caption: 'После ужина', product: 'long', color: 'grey', pos: '50% 40%' },
    { src: 'img/look-hoodie-cafe', caption: 'Утро в кафе', product: 'hoodie', color: 'black', pos: '50% 30%' }
  ]
};
