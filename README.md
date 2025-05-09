<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Игра Пинг Понга</title>
    <style>
        #game {
            width: 600px;
            height: 400px;
            border: 1px solid black;
            position: relative;
            background-color: #eee;
        }
        
        .paddle {
            width: 10px;
            height: 70px;
            background-color: blue;
            position: absolute;
        }
        
        #ball {
            width: 10px;
            height: 10px;
            background-color: red;
            position: absolute;
        }
    </style>
</head>
<body>
<div id="game">
    <div class="paddle" id="leftPaddle"></div>
    <div class="paddle" id="rightPaddle"></div>
    <div id="ball"></div>
</div>
<script>
    const game = document.getElementById('game');
    const leftPaddle = document.getElementById('leftPaddle');
    const rightPaddle = document.getElementById('rightPaddle');
    const ball = document.getElementById('ball');
    
    let ballX = 300, ballY = 200;
    let paddleLeftY = 165, paddleRightY = 165;
    let ballSpeedX = 3, ballSpeedY = 3;
    let scoreLeft = 0, scoreRight = 0;

    function moveBall() {
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
    }

    function movePaddles() {
        leftPaddle.style.top = `${paddleLeftY}px`;
        rightPaddle.style.top = `${paddleRightY}px`;
    }

    function updateScore() {
        console.log(`Игрок слева: ${scoreLeft}, Игрок справа: ${scoreRight}`);
    }

    // Обработка столкновений мяча с границами поля и ракетками
    function handleCollisions() {
        if(ballY <= 0 || ballY >= 390){
            ballSpeedY *= -1;
        }
        if((ballX <= 10 && ballY > paddleLeftY && ballY < paddleLeftY + 70)
           || (ballX >= 580 && ballY > paddleRightY && ballY < paddleRightY + 70)) {
            ballSpeedX *= -1;
        }
        else if(ballX <= 0){
            scoreRight++;
            resetBall();
        }
        else if(ballX >= 590){
            scoreLeft++;
            resetBall();
        }
    }

    function resetBall(){
        ballX = 300;
        ballY = 200;
        ballSpeedX *= -1;
    }

    function loop() {
        requestAnimationFrame(loop);
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        moveBall();
        movePaddles();
        handleCollisions();
    }

    window.addEventListener("keydown", e => {
        switch(e.keyCode){
            case 87: // клавиша 'W'
                paddleLeftY -= 10;
                break;
            case 83: // клавиша 'S'
                paddleLeftY += 10;
                break;
            case 38: // Стрелка вверх
                paddleRightY -= 10;
                break;
            case 40: // Стрелка вниз
                paddleRightY += 10;
                break;
        }
    });

    loop();  
</script>
</body>
</html>
