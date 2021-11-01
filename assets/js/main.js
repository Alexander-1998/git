//Слайдер отзывов
const sliderCnt = document.querySelector('.slider__slide-cnt');
const slide = document.querySelectorAll('.slider__slide');

//Счетчик
let count = 1,
    size = slide[0].clientWidth;
    

sliderCnt.style.transform = 'translateX(' + (-size * count) + 'px)';

//Кнопки
const next = document.querySelector('.next'),
      prev = document.querySelector('.prev');

      next.addEventListener('click', () => {
          if(count >= slide.length - 1){return}
        sliderCnt.style.transition = 'transform .4s ease-in-out';
        count++;
        sliderCnt.style.transform = 'translateX(' + (-size * count) + 'px)';
      });

      prev.addEventListener('click', () => {
        if(count <= 0){return}
        sliderCnt.style.transition = 'transform .4s ease-in-out';
        count--;
        sliderCnt.style.transform = 'translateX(' + (-size * count) + 'px)';
        
      });

    sliderCnt.addEventListener('transitionend', () => {
        if(slide[count].id == 'last'){
            sliderCnt.style.transition = 'none';
            count = slide.length - 2;
            sliderCnt.style.transform = 'translateX(' + (-size * count) + 'px)';
        };

        if(slide[count].id == 'first'){
            sliderCnt.style.transition = 'none';
            count = slide.length - count;
            sliderCnt.style.transform = 'translateX(' + (-size * count) + 'px)';
        };
    });


//Таймер обратного отсчёта
const staringMinutes = 30;
let time = staringMinutes * 60;

const timer = document.querySelector('.timer');

setInterval(updateCountDown, 1000);

function updateCountDown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerHTML = `${minutes} : ${seconds}`;

    time--;
}
