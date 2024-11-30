'use strict';

/**
 * М О Д У Л Ь   С Л А Й Д Е Р А
 */
const Slider = (function () {
  let slider, sliderWrapper, sliderItems, leftBtn, rightBtn;
  let sliderWidth = 0;
  let gap = 0;
  let sliderVisibleWidth = 0;
  let slideMove = 0;

  // Подготовка слайдера: настройка элементов, прослушка событий
  function initialize(section, wrapper, leftButton, rightButton) {
    slider = section;
    sliderWrapper = wrapper;
    leftBtn = leftButton;
    rightBtn = rightButton;
    sliderItems = Array.from(sliderWrapper.children);

    leftBtn.disabled = true;
    rightBtn.disabled = false;

    updateSliderWidth();
    updateButtonStates();

    window.addEventListener('load', updateSliderWidth);
    window.addEventListener('resize', updateSliderWidth);
    leftBtn.addEventListener('click', () => moveSlides(1));
    rightBtn.addEventListener('click', () => moveSlides(-1));
  }

  // Расчет сдвига слайдов
  function updateSliderWidth() {
    sliderVisibleWidth = slider.offsetWidth;
    gap = parseInt(getComputedStyle(sliderWrapper).gap);
    const slidesWidth = sliderItems.reduce((sum, slideWidth) => sum + slideWidth.offsetWidth, 0);
    sliderWidth = slidesWidth + (gap * sliderItems.length - 1) + (parseInt(getComputedStyle(slider).padding.split(' ')[1]) * 2);
    const hiddenWidth = sliderWidth - sliderVisibleWidth;

    slideMove = Math.ceil(sliderVisibleWidth > 768 ? hiddenWidth / 3 : hiddenWidth / 6);
    sliderWrapper.style.transform = `translateX(0px)`;
    
    setTimeout(() => updateButtonStates(0), 0);
  }

  // Получение текущей позиции слайдера
  function getCurrentPosition() {
    const transformValue = getComputedStyle(sliderWrapper).transform;
    return transformValue !== 'none' ? parseFloat(transformValue.split(',')[4]) : 0;
  }

  // Обновление состояний кнопок
  function updateButtonStates(newPositionX = null) {
    const currentPositionX = newPositionX !== null ? newPositionX : getCurrentPosition();
    const maxPositionX = -(sliderWidth - sliderVisibleWidth - gap);
    const wasleftBtnDisabled = leftBtn.disabled;
    const wasRightBtnDisabled = rightBtn.disabled;

    leftBtn.disabled = currentPositionX >= 0;
    rightBtn.disabled = currentPositionX <= maxPositionX;

    if (leftBtn.disabled && !wasleftBtnDisabled) turnoverButton(leftBtn);
    if (rightBtn.disabled && !wasRightBtnDisabled) turnoverButton(rightBtn);
  }

  //Вибрация кнопок при достижении конца слайдера
  function turnoverButton(button) {
    button.classList.add('turnover');
    setTimeout(() => button.classList.remove('turnover'), 300);
  }

  // Перемещение слайдов
  function moveSlides(direction) {
    const currentPositionX = getCurrentPosition();
    const maxPositionX = -(sliderWidth - sliderVisibleWidth - gap);

    let newPositionX = currentPositionX + (direction * slideMove);
    
    newPositionX = Math.max(newPositionX, maxPositionX);
    newPositionX = Math.min(newPositionX, 0);
    
    updateButtonStates(newPositionX);
    sliderWrapper.style.transform = `translateX(${newPositionX}px)`;
 }

  return { initialize };
})();

/**
 * М О Д У Л Ь    Б У Р Г Е Р - М Е Н Ю
 */
const BurgerMenu = (function () {
  let burgerMenu, burgerLines;

  // Подготовка бургер-меню: настройка элементов, прослушка событий
  function initialize(menu, lines) {
    burgerMenu = menu;
    burgerLines = lines;

    burgerLines.addEventListener('click', toggleMenu);
  }

  // Переключение состояний бургер-меню
  function toggleMenu() {
    burgerMenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  }

  return { initialize };
})();

/**
 * М О Д У Л Ь   Т А Й М Е Р А
 */
const Timer = ( function () {
  let daysEl, hoursEl, minutesEl, secondsEl;
  let finishDate;
  let timerInterval;

  function initialize (daysBox, hoursBox, minutesBox, secondsBox, finishD) {
    daysEl = daysBox;
    hoursEl = hoursBox;
    minutesEl = minutesBox;
    secondsEl = secondsBox;
    finishDate = finishD;
    updateTimer();

    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    const nowDate = new Date();
    const lastDate = finishDate - nowDate;

    if (lastDate <= 0) {
      clearInterval(timerInterval);
      return;
    }

    const seconds = Math.floor((lastDate / 1000) % 60);
    const minutes = Math.floor((lastDate / 1000 / 60) % 60);
    const hours = Math.floor((lastDate / 1000 / 60 / 60) % 24);
    const days = Math.floor(lastDate / 1000 / 60 / 60 / 24);

    setTimerVal(days, hours, minutes, seconds)
  }

  function setTimerVal(days, hours, minutes, seconds) {
    daysEl.querySelector('#days').textContent = days;
    hoursEl.querySelector('#hours').textContent = hours;
    minutesEl.querySelector('#minutes').textContent = minutes;
    secondsEl.querySelector('#seconds').textContent = seconds;

    daysEl.querySelector('.time-signature').textContent = getRightWord(days, 'day', 'days');
    hoursEl.querySelector('.time-signature').textContent = getRightWord(hours, 'hour', 'hours');
    minutesEl.querySelector('.time-signature').textContent = getRightWord(minutes, 'minute', 'minutes');
    secondsEl.querySelector('.time-signature').textContent = getRightWord(seconds, 'second', 'seconds');
  }

  function getRightWord(val, singular, plural) {
    return val === 1 ? singular : plural;
  }

  return { initialize, };
})();

document.addEventListener('DOMContentLoaded', () => {
  const finishDate = new Date(Date.UTC(2025, 0, 1, 0, 0, 0));

  Slider.initialize(
      document.querySelector('.slider'),
      document.querySelector('.slider__wrapper'),
      document.querySelector('.left-button'),
      document.querySelector('.right-button')
  );

  BurgerMenu.initialize(
      document.querySelector('.header__burger-menu'),
      document.querySelector('.header__burger-lines')
  );

  Timer.initialize (
    document.getElementById('days').closest('.timer__item'),
    document.getElementById('hours').closest('.timer__item'),
    document.getElementById('minutes').closest('.timer__item'),
    document.getElementById('seconds').closest('.timer__item'),
    finishDate
  );
});