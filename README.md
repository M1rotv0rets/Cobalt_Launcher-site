<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Калькулятор координат Minecraft</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fafafa;
        }
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #result {
            margin-top: 20px;
            padding: 10px;
            background-color: #ffffff;
            border: 1px solid #cccccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<h1>Калькулятор координат Minecraft</h1>

<label for="x">Координата X:</label>
<input type="number" id="x" placeholder="X" required>

<label for="y">Координата Y:</label>
<input type="number" id="y" placeholder="Y" required>

<label for="z">Координата Z:</label>
<input type="number" id="z" placeholder="Z" required>

<button onclick="calculate()">Получить информацию</button>

<div id="result"></div>

<script>
    function calculate() {
        const x = parseInt(document.getElementById('x').value);
        const y = parseInt(document.getElementById('y').value);
        const z = parseInt(document.getElementById('z').value);

        // Регион
        const regionX = Math.floor(x / 512);
        const regionZ = Math.floor(z / 512);
        const regionFile = `r.${regionX}.${regionZ}.mca`;

        // Чанк
        const chunkX = Math.floor((x % 512) / 16);
        const chunkZ = Math.floor((z % 512) / 16);

        // Секция чанка
        const chunkSectionY = Math.floor(y / 16);

        // Общая информация
        const blocksInRegion = 512 * 512 * 256;
        const chunksInRegion = 32 * 32;
        const blocksInChunkSection = 16 * 16 * 16;

        // Вывод результатов
        const result = `
            <h2>Информация о блоке:</h2>
            Координаты: X:${x}, Y:${y}, Z:${z}<br>
            <h2>Информация о чанке:</h2>
            Чанк: (${chunkX}, ${chunkZ}), секция чанка: уровень ${chunkSectionY}<br>
            <h2>Информация о регионе:</h2>
            Файл региона: ${regionFile}<br>
            Всего блоков в регионе: ${blocksInRegion}<br>
            Всего секций чанков в регионе: ${chunksInRegion}<br>
            Количество блоков в секции чанка: ${blocksInChunkSection}
