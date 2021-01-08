context = c.getContext("2d");
const bird = new Image();
bird.src = "img/bird.png";
birdX = birdDY = score = bestScore = 0;
interval = birdSize = pipeWidth = topPipeBottomY = 24;
birdY = pipeGap = 200;
canvasSize = pipeX = 400;
c.onclick = () => (birdDY = 9) ;
setInterval(() => {
  context.fillStyle = "skyblue";
   // Draw sky
  context.fillRect(0,0,canvasSize,canvasSize);
  // Define gravity
  birdY -= birdDY -= 0.5;
   // Draw bird
  context.drawImage(bird, birdX, birdY, birdSize * (524/374), birdSize);
  context.fillStyle = "green";
  // Move pipe
  pipeX -= 8;
  // Pipe off screen and reset pipe and randomize gap
  pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()));
    // Draw top pipe
  context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY);
  // Draw bottom pipe
  context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize);
  context.fillStyle = "black";
  // Increase and draw score
  context.fillText(`Score: ${score++}`, 9, 25);
  // New best score
  bestScore = bestScore < score ? score : bestScore;
  // Draw best score
  context.fillText(`Best: ${bestScore}`, 9, 50);
  // Bird hit pipe or bird falls off screen and/or bird died
  (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524/374)) || birdY > canvasSize) && ((birdDY = 0), (birdY = 200), (pipeX = canvasSize), (score = 0));
}, interval)