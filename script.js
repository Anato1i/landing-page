new Swiper('.image-slider', {
  // Optional parameters

  loop: true,
  loopedSlides: 2,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  grabCursor: true,

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.image-slider',
  },

  autoHeight: true,

  spaceBetween: 40,

  slidesPerView: 3.5,
})


// окрашиваем буквы заголовка
const textElement = document.querySelector('.logo__text');
const text = textElement.textContent;

// Генерируем случайный цвет в формате #RRGGBB
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Создаем новый HTML-код с каждой буквой, окрашенной в случайный цвет
const colorfulText = text.split('').map(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.color = getRandomColor();
    return span.outerHTML;
}).join('');

// Заменяем содержимое элемента на окрашенный текст
textElement.innerHTML = colorfulText;




// Функция для отображения увеличенного изображения
function showZoomedImage(imageSrc) {
  const zoomedContainer = document.getElementById('zoomed-image-container');
  const zoomedImage = document.getElementById('zoomed-image');

  zoomedContainer.style.display = 'block';
  zoomedImage.src = imageSrc;
}

// Функция для закрытия увеличенного изображения
function closeZoomedImage() {
  const zoomedContainer = document.getElementById('zoomed-image-container');
  zoomedContainer.style.display = 'none';
}

// Найти все изображения с классом "zoomable"
const zoomableImages = document.querySelectorAll('.zoomable');

// Добавить обработчик события на каждое изображение
zoomableImages.forEach((image) => {
  image.addEventListener('click', () => {
    const imageSrc = image.src;
    showZoomedImage(imageSrc);
  });
});

// Добавить обработчик события для закрытия увеличенного изображения
const closeZoomedButton = document.getElementById('close-zoomed-image');
closeZoomedButton.addEventListener('click', () => {
  closeZoomedImage();
});

