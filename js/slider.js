const slider = document.getElementById('slider');
const items = slider.querySelectorAll('.slider-item');
const prevButton = slider.querySelector('.slider-prev');
const nextButton = slider.querySelector('.slider-next');
let currentIndex = 0;

prevButton.addEventListener('click', function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }
  updateSlider();
});

nextButton.addEventListener('click', function() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  items.forEach(function(item, index) {
    if (index === currentIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

updateSlider();