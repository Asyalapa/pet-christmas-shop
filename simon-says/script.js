'use strict';

const buttonHoverEffect = (() => {
  const init = () => {
    document.addEventListener('mousemove', handleHover);
  };

  const handleHover = (event) => {
    const target = event.target;
    if (target && target.classList.contains('btn')) {
      const x = event.pageX - target.offsetLeft;
      const y = event.pageY - target.offsetTop;
      target.style.setProperty('--x', `${x}px`);
      target.style.setProperty('--y', `${y}px`);
    }
  };

  return { init };
})();

const simonGame = (() => {
  const keyboardItems = Array.from(document.querySelectorAll('.keyboard'));
  const startRoundBtn = document.querySelector('.game-box__start');
  const currentRoundDisplay = document.querySelector('.game-box__round');

  let currentRoundNumber = 1;
  let sequence = [];
  const maxRoundNumber = 5;

  const init = () => {
    startRoundBtn.addEventListener('click', startGame);
  };

  const startGame = () => {
    startRoundBtn.textContent = 'Look!';
    generateSequence();
    displaySequence();
  };

  const generateSequence = () => {
    sequence = [];
    const sequenceLength = currentRoundNumber * 2;
    while (sequence.length < sequenceLength) {
      const randomElement = Math.floor(Math.random() * keyboardItems.length);
      if (sequence.length > 0 && sequence[sequence.length - 1] === randomElement) {
        continue;
      }
      sequence.push(randomElement);
    }
  };

  const displaySequence = () => {
    sequence.forEach((index, i) => {
      setTimeout(() => {
        activateKey(keyboardItems[index]);
        if (i === sequence.length - 1) {
          setTimeout(() => {
            startRoundBtn.textContent = 'Type!';
            acceptInput();
          }, 1000);
        }
      }, i * 2000);
    });
  };

  const activateKey = (key) => {
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 1000);
  };

  const acceptInput = () => {
    let userSequence = [];
    const inputHandler = (event) => {
      const input = getInput(event);
      const index = keyboardItems.findIndex((item) => item.textContent.toLowerCase() === input);
      if (index !== -1) {
        activateKey(keyboardItems[index]);
        userSequence.push(index);

        if (userSequence.length === sequence.length) {
          cleanupInputHandlers(inputHandler);
          handleRoundResult(userSequence);
        }
      }
    };

    attachInputHandlers(inputHandler);
  };

  const getInput = (event) => {
    if (event.type === 'click' || event.type === 'touchstart') {
      return event.currentTarget.textContent.toLowerCase();
    } else if (event.type === 'keydown') {
      return event.key.toLowerCase();
    }
    return null;
  };

  const attachInputHandlers = (handler) => {
    document.addEventListener('keydown', handler);
    keyboardItems.forEach((item) => {
      item.addEventListener('click', handler);
      item.addEventListener('touchstart', handler);
    });
  };

  const cleanupInputHandlers = (handler) => {
    document.removeEventListener('keydown', handler);
    keyboardItems.forEach((item) => {
      item.removeEventListener('click', handler);
      item.removeEventListener('touchstart', handler);
    });
  };

  const handleRoundResult = (userSequence) => {
    if (arraysEqual(userSequence, sequence)) {
      showMessage('You win!');
      if (currentRoundNumber < maxRoundNumber) {
        currentRoundNumber++;
        setTimeout(() => {
          updateRoundDisplay();
          resetButton();
        }, 2000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 2000);
      }
    } else {
      showMessage('You lose!');
      setTimeout(() => {
        resetGame();
      }, 2000);
    }
  };

  const updateRoundDisplay = () => {
    currentRoundDisplay.textContent = `Round: ${currentRoundNumber}`;
  };

  const resetButton = () => {
    startRoundBtn.textContent = 'Start';
    // startRoundBtn.disabled = false;
  };

  const resetGame = () => {
    currentRoundNumber = 1;
    updateRoundDisplay();
    resetButton();
  };

  const showMessage = (message) => {
    startRoundBtn.textContent = message;
  };

  const arraysEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  buttonHoverEffect.init();
  simonGame.init();
});
