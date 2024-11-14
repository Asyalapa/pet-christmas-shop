const slider = document.querySelector('.slider__wrapper');
const slides = document.querySelectorAll('.slider__item');
const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');

let slideWidth = slides[0].offsetWidth;
let visibleWidth = document.querySelector('.slider').offsetWidth;
let currentPosition = 0;

function updateSliderWidth() {
    slideWidth = slides[0].offsetWidth; // ширина одного слайда
    visibleWidth = document.querySelector('.slider').offsetWidth; // видимая ширина
}

function moveSlider(direction) {
  console.log('moveSlider', direction);
    const maxPosition = -(slideWidth * (slides.length - Math.floor(visibleWidth / slideWidth))); // конечная позиция
    currentPosition += direction * slideWidth;
  console.log('currentPosition', currentPosition, slideWidth);
    // Ограничение перемещения
    if (currentPosition > 0) {
        currentPosition = 0;
        console.log('if', currentPosition);
    } else if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
        console.log('else if', currentPosition);
    }

    slider.style.transform = `translateX(${currentPosition}px)`;

    // Управление активностью кнопок
    leftBtn.disabled = currentPosition === 0;
    rightBtn.disabled = currentPosition === maxPosition;
}

leftBtn.addEventListener('click', () => moveSlider(-1));
rightBtn.addEventListener('click', () => moveSlider(1));

// Обновление ширины слайдера при изменении размера окна
window.addEventListener('resize', () => {
    updateSliderWidth();
    moveSlider(0); // Проверка позиции и активности кнопок
});

// Инициализация состояния кнопок и ширины при загрузке страницы
updateSliderWidth();
moveSlider(0);
