const sliderSection = document.querySelector('.slider');
const slider = document.querySelector('.slider__wrapper');
const slides = document.querySelectorAll('.slider__item');
const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');

// Рассчет видимой области и ширины элемента слайдера при загрузке и изменении размера
function updateSliderWidth() {
    const visibleWidth = sliderSection.offsetWidth;
    const slideWidth = slider.children[0].offsetWidth;
    const numSlides = slider.children.length;
    
    // Рассчет длины ленты слайдера
    const gap = parseInt(getComputedStyle(slider).gap);
    let totalSliderLength = (slideWidth * numSlides) + (gap * (numSlides - 1));
  
    // Рассчет количества слайдов для показа, исходя из видимой ширины
    let widthSlidesToShow;
    if (visibleWidth >= 768) {
        widthSlidesToShow = (totalSliderLength - visibleWidth) / 4;
    } else {
        widthSlidesToShow = (totalSliderLength - visibleWidth) / 6;
    }

    updateButtonStates();
}

// Обновление состояний кнопок
function updateButtonStates() {
    const currentSlide = getCurrentSlide();
    const maxSlides = slider.children.length - 1;

    leftBtn.disabled = currentSlide === 0;
    rightBtn.disabled = currentSlide === maxSlides;
}
  
  // Получение текущей позиции слайдера
  function getCurrentSlide() {
    const sliderRect = slider.getBoundingClientRect();
    const slideWidth = slider.children[0].offsetWidth;
    const currentSlide = Math.floor(sliderRect.left / slideWidth);
    console.log(currentSlide);
    return currentSlide;
  }
  
  // Слушатель кликов по кнопкам
  leftBtn.addEventListener('click', () => {
    const currentSlide = getCurrentSlide();
    const newSlide = currentSlide - 1;
    slider.style.transform = `translateX(${newSlide * slideWidth}px)`;
    updateButtonStates();
  });
  
  rightBtn.addEventListener('click', () => {
    const currentSlide = getCurrentSlide();
    const newSlide = currentSlide + 1;
    slider.style.transform = `translateX(${newSlide * slideWidth}px)`;
    updateButtonStates();
  });
  
  // Initialize the slider on load and resize
  window.addEventListener('load', updateSliderWidth);
  window.addEventListener('resize', updateSliderWidth);
