function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
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

function toggleLanguageMenu() {
    document.getElementById('language-menu').classList.toggle('hidden');
}

function setLanguage(lang) {
    const flagSpan = document.getElementById('language-flag');
    const langMap = {
        'ru': '🇷🇺',
        'uk': '🇺🇦',
        'en': '🇬🇧'
    };
    flagSpan.textContent = langMap[lang] || '🌐';
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
            nav_theme: 'Сменить тему',
            nav_lang: 'Сменить язык',
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
            nav_theme: 'Змінити тему',
            nav_lang: 'Змінити мову',
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
            nav_theme: 'Toggle Theme',
            nav_lang: 'Change Language',
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
    // Темна тема за замовчуванням
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== 'light') {
        document.body.classList.add('dark');
    }

    // Мова
    const savedLang = localStorage.getItem('site-lang') || 'ru';
    setLanguage(savedLang);
});
