'use strict';

let startBtn = document.querySelector('.btn');

startBtn.addEventListener('mousemove', (event) => {
  let x = event.pageX - startBtn.offsetLeft;
  let y = event.pageY - startBtn.offsetTop;
  startBtn.style.setProperty('--x', x + 'px');
  startBtn.style.setProperty('--y', y + 'px');
});