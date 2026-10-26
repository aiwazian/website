export type Language = 'ru' | 'en';

export interface MetaTranslations {
  homeTitle: string;
  homeDescription: string;
  homeKeywords: string;
  ogTitle: string;
  ogDescription: string;
  privacyTitle: string;
  privacyDescription: string;
  tosTitle: string;
  tosDescription: string;
}

export interface Translations {
  meta: MetaTranslations;
  navbar: {
    comparison: string;
    opensource: string;
    download: string;
    googlePlay: string;
    installGooglePlay: string;
    sourceCodeGitHub: string;
    closeMenu: string;
    openMenu: string;
  };
  hero: {
    tagline1: string;
    tagline2: string;
    tagline3: string;
    headline1: string;
    headline2: string;
    description: string;
    ctaGooglePlay: string;
    ctaGitHub: string;
  };
  comparison: {
    badge: string;
    title: string;
    description: string;
    colFeature: string;
    colAiwazian: string;
    colTelegram: string;
    colWhatsapp: string;
    colSignal: string;
    yes: string;
    no: string;
    clientOnly: string;
    premiumExists: string;
    row1Feature: string;
    row1Desc: string;
    row2Feature: string;
    row2Desc: string;
    row3Feature: string;
    row3Desc: string;
  };
  opensource: {
    badge: string;
    title: string;
    description: string;
    clientBtn: string;
    serverBtn: string;
    bashHeader: string;
    copy: string;
    copied: string;
    footerNote: string;
    cloneCommentClient: string;
    cloneCommentServer: string;
  };
  download: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    ctaButton: string;
    badgeAndroid: string;
    badgeFree: string;
    badgeProtect: string;
  };
  footer: {
    privacyPolicy: string;
    termsOfService: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    meta: {
      homeTitle: 'Aiwazian Messenger – Анонимный мессенджер без номера телефона',
      homeDescription:
        'Мессенджер с полной анонимностью, без привязки к телефону и почте, с открытым исходным кодом. Скачайте для Android в Google Play.',
      homeKeywords:
        'Aiwazian Messenger, анонимный мессенджер, мессенджер без номера телефона, мессенджер без email, мессенджер с открытым исходным кодом, приватный чат, Android мессенджер, Google Play, безопасное общение',
      ogTitle: 'Aiwazian Messenger – Анонимный мессенджер без номера телефона',
      ogDescription:
        'Мессенджер с полной анонимностью, без привязки к телефону и почте, с открытым исходным кодом. Скачайте для Android в Google Play.',
      privacyTitle: 'Политика конфиденциальности | Aiwazian Messenger',
      privacyDescription:
        'Политика конфиденциальности мессенджера Aiwazian Messenger. Порядок обработки и защиты данных.',
      tosTitle: 'Условия использования | Aiwazian Messenger',
      tosDescription: 'Условия использования сервиса и мессенджера Aiwazian Messenger.',
    },
    navbar: {
      comparison: 'Сравнение',
      opensource: 'Исходный код',
      download: 'Скачать',
      googlePlay: 'Google Play',
      installGooglePlay: 'Установить из Google Play',
      sourceCodeGitHub: 'Исходный код на GitHub',
      closeMenu: 'Закрыть меню',
      openMenu: 'Открыть меню',
    },
    hero: {
      tagline1: 'Полная анонимность',
      tagline2: 'Без номера телефона',
      tagline3: 'Open Source',
      headline1: 'Messenger',
      headline2: 'без номеров и слежки',
      description:
        'Мессенджер с полной анонимностью, без привязки к телефону и почте, с открытым исходным кодом. Никаких паспортных данных, подтверждений по СМС или слежки за контактами.',
      ctaGooglePlay: 'Скачать в Google Play',
      ctaGitHub: 'Репозиторий на GitHub',
    },
    comparison: {
      badge: 'Честное сравнение',
      title: 'Сравнение с популярными мессенджерами',
      description:
        'Главное отличие Aiwazian — отказ от привязки к телефонным номерам. Вы остаетесь анонимным с момента установки.',
      colFeature: 'Параметр анонимности',
      colAiwazian: 'Aiwazian',
      colTelegram: 'Telegram',
      colWhatsapp: 'WhatsApp',
      colSignal: 'Signal',
      yes: 'Да',
      no: 'Нет',
      clientOnly: 'Только клиент',
      premiumExists: 'Есть платный Premium',
      row1Feature: 'Регистрация без номера телефона',
      row1Desc: 'Не требуется сим-карта, СМС-коды или телефонная привязка к паспортным данным.',
      row2Feature: '100% Открытый исходный код',
      row2Desc: 'Исходный код клиента и сервера опубликован на GitHub для свободного аудита.',
      row3Feature: 'Без обязательных платных Premium-подписок',
      row3Desc: 'Все функции общения доступны бесплатно с первого дня (поддерживается рекламой).',
    },
    opensource: {
      badge: 'Прозрачность и открытость',
      title: 'Открытый исходный код',
      description:
        'Мы верим в силу открытого программного обеспечения. Серверная часть и клиентский код приложения опубликованы на GitHub. Вы можете изучить архитектуру, внести свой вклад или провести аудит безопасности.',
      clientBtn: 'Клиент (Android)',
      serverBtn: 'Сервер',
      bashHeader: 'bash — клонировать репозитории',
      copy: 'Копировать',
      copied: 'Скопировано',
      footerNote: 'Код доступен для свободного изучения на github.com/aiwazian',
      cloneCommentClient: '# Клонировать клиент (Android)',
      cloneCommentServer: '# Клонировать сервер',
    },
    download: {
      badge: 'Официальный релиз в Google Play',
      title1: 'Общайтесь без привязки',
      title2: 'к номеру телефона',
      description:
        'Установите Aiwazian Messenger на свой Android-смартфон. Регистрация занимает 5 секунд, без ввода личных данных и без привязки к паспорту.',
      ctaButton: 'Установить из Google Play',
      badgeAndroid: 'Android 11 и новее',
      badgeFree: 'Бесплатно в Google Play',
      badgeProtect: 'Google Play Protect проверено',
    },
    footer: {
      privacyPolicy: 'Политика конфиденциальности',
      termsOfService: 'Условия использования',
      copyright: '© 2026 AIWAZIAN',
    },
  },
  en: {
    meta: {
      homeTitle: 'Aiwazian Messenger – Anonymous Messenger Without Phone Numbers',
      homeDescription:
        'A messenger built for absolute privacy and anonymity, with zero phone number or email linkage, and 100% open source code. Download for Android on Google Play.',
      homeKeywords:
        'Aiwazian Messenger, anonymous messenger, private chat, no phone number messenger, open source messenger, Android messenger, Google Play, secure messaging, confidential chat',
      ogTitle: 'Aiwazian Messenger – Anonymous Messenger Without Phone Numbers',
      ogDescription:
        'A messenger built for absolute privacy and anonymity, with zero phone number or email linkage, and 100% open source code. Download for Android on Google Play.',
      privacyTitle: 'Privacy Policy | Aiwazian Messenger',
      privacyDescription:
        'Privacy Policy for Aiwazian Messenger. Data processing, storage, and security procedures.',
      tosTitle: 'Terms of Service | Aiwazian Messenger',
      tosDescription: 'Terms of Service for Aiwazian Messenger service and applications.',
    },
    navbar: {
      comparison: 'Comparison',
      opensource: 'Source Code',
      download: 'Download',
      googlePlay: 'Google Play',
      installGooglePlay: 'Install from Google Play',
      sourceCodeGitHub: 'Source Code on GitHub',
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
    },
    hero: {
      tagline1: 'Total Anonymity',
      tagline2: 'No Phone Number',
      tagline3: 'Open Source',
      headline1: 'Messenger',
      headline2: 'without numbers or tracking',
      description:
        'A messenger built for absolute privacy and anonymity, with zero phone number or email linkage, and 100% open source code. No passport data, SMS verifications, or contact harvesting.',
      ctaGooglePlay: 'Download on Google Play',
      ctaGitHub: 'Repository on GitHub',
    },
    comparison: {
      badge: 'Honest Comparison',
      title: 'Comparison with Popular Messengers',
      description:
        'The primary difference of Aiwazian is the complete absence of phone numbers. You remain anonymous from the very second you install.',
      colFeature: 'Privacy & Security Feature',
      colAiwazian: 'Aiwazian',
      colTelegram: 'Telegram',
      colWhatsapp: 'WhatsApp',
      colSignal: 'Signal',
      yes: 'Yes',
      no: 'No',
      clientOnly: 'Client only',
      premiumExists: 'Paid Premium required',
      row1Feature: 'Registration without phone number',
      row1Desc: 'No SIM card, SMS codes, or phone linkage to government ID required.',
      row2Feature: '100% Open Source Code',
      row2Desc: 'Client and server source code are publicly released on GitHub for open audit.',
      row3Feature: 'No compulsory paid Premium tiers',
      row3Desc: 'All messaging features are free from day one (supported by unobtrusive ads).',
    },
    opensource: {
      badge: 'Transparency & Freedom',
      title: 'Open Source Codebase',
      description:
        'We believe in the power of open-source software. Both the backend server and Android client repositories are published on GitHub. Inspect the architecture, contribute, or run a security audit.',
      clientBtn: 'Client (Android)',
      serverBtn: 'Server',
      bashHeader: 'bash — clone repositories',
      copy: 'Copy',
      copied: 'Copied',
      footerNote: 'Code is freely accessible on github.com/aiwazian',
      cloneCommentClient: '# Clone Android client',
      cloneCommentServer: '# Clone backend server',
    },
    download: {
      badge: 'Official Google Play Release',
      title1: 'Communicate freely without',
      title2: 'phone number linkage',
      description:
        'Install Aiwazian Messenger on your Android smartphone. Setup takes 5 seconds, with zero personal data, phone numbers, or passwords.',
      ctaButton: 'Install from Google Play',
      badgeAndroid: 'Android 11 and newer',
      badgeFree: 'Free on Google Play',
      badgeProtect: 'Verified by Google Play Protect',
    },
    footer: {
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      copyright: '© 2026 AIWAZIAN',
    },
  },
};
