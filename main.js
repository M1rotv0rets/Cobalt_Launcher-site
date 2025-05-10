function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  // Закриваємо меню на мобілках
  document.getElementById('sidebar').classList.remove('show');
  document.body.classList.remove('sidebar-open');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
  document.body.classList.toggle('sidebar-open');
}

function setLanguage(lang) {
  const flagMap = {
    ru: '🇷🇺',
    uk: '🇺🇦',
    en: '🇬🇧'
  };
  localStorage.setItem('site-lang', lang);
  updateLanguage(lang);
}

function updateLanguage(lang) {
  const translations = {
    ru: {
      nav_home: 'Главная',
      nav_accounts: 'Аккаунты',
      nav_about: 'О проекте',
      nav_login: 'Вход / Регистрация',
      nav_settings: 'Настройки',
      nav_theme: 'Тема',
      nav_lang: 'Язык интерфейса',
      home_title: 'Добро пожаловать в Cobalt Launcher!',
      home_text: 'Это главная страница.',
      accounts_title: 'Страница аккаунтов',
      accounts_text: 'Здесь в будущем будет управление аккаунтами.',
      about_title: 'О проекте',
      about_text: 'Это сайт лаунчера Cobalt, созданный с любовью 💙',
    },
    uk: {
      nav_home: 'Головна',
      nav_accounts: 'Акаунти',
      nav_about: 'Про проєкт',
      nav_login: 'Вхід / Реєстрація',
      nav_settings: 'Налаштування',
      nav_theme: 'Тема',
      nav_lang: 'Мова інтерфейсу',
      home_title: 'Ласкаво просимо до Cobalt Launcher!',
      home_text: 'Це головна сторінка.',
      accounts_title: 'Сторінка акаунтів',
      accounts_text: 'Тут в майбутньому буде керування акаунтами.',
      about_title: 'Про проєкт',
      about_text: 'Це сайт лаунчера Cobalt, створений з любов’ю 💙',
    },
    en: {
      nav_home: 'Home',
      nav_accounts: 'Accounts',
      nav_about: 'About',
      nav_login: 'Login / Register',
      nav_settings: 'Settings',
      nav_theme: 'Theme',
      nav_lang: 'Interface language',
      home_title: 'Welcome to Cobalt Launcher!',
      home_text: 'This is the home page.',
      accounts_title: 'Accounts Page',
      accounts_text: 'Account management will be here in the future.',
      about_title: 'About the Project',
      about_text: 'This is the official site for Cobalt Launcher 💙',
    }
  };

  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    el.textContent = translations[lang][key] || key;
  });
}

// Ініціалізація
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme || savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  const savedLang = localStorage.getItem('site-lang') || 'ru';
  updateLanguage(savedLang);
});
