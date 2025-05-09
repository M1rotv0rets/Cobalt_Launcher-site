<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Главное меню</title>
<style>
body {
  transition: background-color 0.5s, color 0.5s;
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
}
</style>
</head>

<body>
<h1>Главное меню сайта</h1>
<p>Добро пожаловать!</p>

<script>
// При загрузке страницы применяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
} else {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
</script>

</body>
</html>
