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
    
    updateButtonStates();
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

    if (leftBtn.disabled && !wasleftBtnDisabled) shakeButton(leftBtn);
    if (rightBtn.disabled && !wasRightBtnDisabled) shakeButton(rightBtn);
  }

  //Вибрация кнопок при достижении конца слайдера
  function shakeButton(button) {
    button.classList.add('shake');
    setTimeout(() => button.classList.remove('shake'), 300);
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

document.addEventListener('DOMContentLoaded', () => {
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
});