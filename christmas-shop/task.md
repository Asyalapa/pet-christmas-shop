1. [v] Implementation of the burger menu on both pages: +22  
Реализация меню-бургера на обеих страницах: +22
    - [v] At a page width of 768px and less, the navigation panel hides, and the burger icon appears: +2   
    При ширине страницы 768px и меньше панель навигации скрывается, появляется иконка бургера: +2.
    - [v] When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross: +2  
    При клике на иконку бургера меню плавно выдвигается справа, и иконка бургера плавно превращается в крестик: +2.
    - [v] The burger menu occupies the entire available screen area below the `<header>` block: +2  
    Меню-бургер занимает всю доступную область экрана под блоком `<header>`: +2.
    - [v] When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon: +2  
    При клике на крестик меню-бургер плавно скрывается, уходя вправо, а крестик плавно превращается обратно в иконку бургера: +2.
    - [v] The burger icon is created using HTML and CSS without the use of images/svg: +2  
    Иконка бургера создаётся с помощью HTML и CSS, без использования изображений или SVG: +2.
    - [v] Links in the burger menu work, providing smooth scrolling to anchor points: +2  
    Ссылки в меню-бургере работают, обеспечивая плавную прокрутку к якорным точкам: +2.
    - [v] When clicking on any link (interactive or non-interactive) in the menu, the burger menu hides, and the cross transforms into a burger icon: +2  
    При клике на любую ссылку (интерактивную или нет) меню-бургер скрывается, и крестик превращается в иконку бургера: +2.
    - [v] When clicking on any link (interactive or non-interactive) in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon if a user stays on the same page: +2  
    При клике на любую ссылку меню-бургер плавно скрывается вправо, и крестик плавно превращается обратно в иконку бургера, если пользователь остаётся на той же странице: +2.
    - [v] The placement and sizes of elements in the burger menu correspond to the layout (horizontal and vertical centering of menu items): +2  
    Расположение и размеры элементов в меню-бургере соответствуют макету (горизонтальное и вертикальное центрирование пунктов меню): +2.
    - [v] The page behind the open menu does not scroll: +2  
    Страница за открытым меню не прокручивается: +2.
    - [v] When the page width increases to more than 768px, the burger icon and the open burger menu hide, and the navigation panel appears: +2  
    При увеличении ширины страницы более 768px иконка бургера и открытое меню-бургер скрываются, а панель навигации отображается: +2.
2. [v] Implementation of the Slider on the home page: +18  
Реализация слайдера на главной странице: +18
    - [v] Scrolling the slider in the corresponding direction is implemented by pressing left arrow button and right arrow button: +2  
    Перемотка слайдера в соответствующую сторону осуществляется нажатием на левую или правую стрелку: +2.
    - [v] The left arrow button is inactive at the far left position of the slider: +2  
    Левая стрелка неактивна в крайнем левом положении слайдера: +2.
    - [v] The right arrow button is inactive at the far right position of the slider: +2  
    Правая стрелка неактивна в крайнем правом положении слайдера: +2.
    - [v] Scrolling the slider is accompanied by the carousel-like animation (the method of animation execution is not evaluated): +4  
    Перемотка слайдера сопровождается анимацией в стиле карусели (способ выполнения анимации не оценивается): +4.
    - [v] The slider is fully scrolled with 3 presses of the arrow button in one direction for screen widths more than 768px, and with 6 presses of the arrow button in one direction for screen widths of 768px and less: +4  
    Слайдер полностью пролистывается за 3 нажатия кнопки-стрелки в одном направлении при ширине экрана более 768px и за 6 нажатий при ширине экрана 768px и меньше: +4.
    - [v] When the screen width changes, the slider returns to its initial position, and the slider can be fully scrolled with the correct number of the relevant arrow button clicks (it works without reloading the page): +4
    При изменении ширины экрана слайдер возвращается в исходное положение, и его можно полностью пролистать нужным количеством кликов по стрелке без перезагрузки страницы: +4.
3. [v] Implementation of the Timer on the home page: +8
Реализация таймера на главной странице: +8
    - [v] The timer shows the correct value of the remaining days, hours, minutes, and seconds until the New Year in UTC+0: +2
    Таймер корректно отображает оставшееся время (дни, часы, минуты, секунды) до Нового года в UTC+0: +2.
    - [v] Leading zeros are not displayed for single-digit numbers: +2
    В числах с одной цифрой лидирующие нули не отображаются: +2.
    - [v] The timer updates every second, displaying the current remaining time with the labels days, hours, minutes, seconds (the labels must not change): +4
    Таймер обновляется каждую секунду, показывая актуальное оставшееся время с метками дней, часов, минут и секунд (метки не изменяются): +4.
4. [v] When both opening or refreshing the page, 4 random cards are displayed in the block Best Gifts on the home page: +4  
При открытии или обновлении страницы в блоке "Best Gifts" на главной странице отображаются 4 случайные карточки: +4.
5. [v] Implementation of the Category switching for products on the gifts page: +8  
Реализация переключения категорий подарков на странице подарков: +8
    - [v] The ALL category is active and all 36 gifts are displayed when both opening or reloading the gifts page. The order of sorting gifts does not matter: +2  
    При открытии или обновлении страницы активна категория "ALL", отображаются все 36 подарков. Порядок сортировки не важен: +2.
    - [v] When switching categories, the gifts of the selected category are displayed. The order of sorting gifts does not matter: +4  
    При переключении категорий отображаются подарки выбранной категории. Порядок сортировки не важен: +4.
    - [v] Only the selected category tab is active: +2  
    Активной остаётся только выбранная вкладка категории: +2.
6. [v] Implementation of the Scroll-to-Top button on the gifts page: +12  
Реализация кнопки "Прокрутить вверх" на странице подарков: +12
    - [v] The button can only appear at a screen width of 768px and less: +2  
    Кнопка появляется только при ширине экрана 768px и меньше: +2
    - [v] At the top of the page, the button is not displayed: +4  
    На верхней части страницы кнопка не отображается: +4.
    - [v] The button appears after scrolling the page down by 300px: +4  
    Кнопка появляется после прокрутки страницы вниз на 300px: +4
    - [v] When the button is clicked, the page scrolls to the top: +2  
    При клике на кнопку страница прокручивается наверх: +2.
7. [v] Implementation of the Modal for selected gift on both pages: +18  
Реализация модального окна для выбранного подарка на обеих страницах: +18
    - [v] The Modal with the description of a specific gift opens when clicking on any part of a card of gift: +4  
    Модальное окно с описанием подарка открывается при клике на любую часть карточки подарка: +4.
    - [v] The description and superpowers in the Modal corresponds to the selected gift: +4  
    Описание и суперспособности в модальном окне соответствуют выбранному подарку: +4.
    - [v] The part of the page outside the Modal is darkened: +2  
    Область страницы за пределами модального окна затемняется: +2.
    - [v] When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +4  
    При открытом модальном окне вертикальная прокрутка страницы становится неактивной; при закрытии активируется: +4.
    - [v] Clicking on the area around the Modal and Close button closes it: +2  
    При клике на затемнённую область или кнопку "Закрыть" модальное окно закрывается: +2.
    - [v] The Modal is centered on both axes, sizes of modal elements and their layout match the design: +2  
    Модальное окно центрируется по обеим осям, размеры и расположение элементов соответствуют дизайну: +2.