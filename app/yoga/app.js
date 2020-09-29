//window.addEventListener('load'); - запускает скрипт  когда  все  загрузиться  в браузере

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function start(q, w, o) {
        let tab = document.querySelectorAll(q),
            info = document.querySelector(w),
            tabContent = document.querySelectorAll(o);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) { // цыыкел скривает  контент  свзязан с табами
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) { // функция проверяет  на  наличее класа hide  если  он есть  удалят  и в ставляет другой 
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) { // цыкл и функция  делает  ставнение  на даб который  мы  кликакем  должно добавляться  класс .shou
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    start('.info-header-tab', '.info-header', '.info-tabcontent');


    // class Options {
    //     constructor(height, width, bd, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bd = bd;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }
    //     divAdd() {
    //         let elem = document.createElement('div');
    //         document.body.appendChild(elem);
    //         let pram = `height:${this.height}px; width:${this.width}px; background-color:${this.bd}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    //         elem.style.cssText = pram;
    //     }

    // }

    // const firstDiv = new Options(300, 350, "red", 14, 'center');
    // firstDiv.divAdd();

    //Slider

    let slideIndex = 1,
        slider = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    
    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slider.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slider.length;
        }

        slider.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slider.length; i++){
        //     slider[i].style.display = 'none';
        // }

        dots.forEach((item) => item.classList.remove('dot-active'));
        slider[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }

        }
    });

    //Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;
    
    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        }else {
            totalValue.innerHTML = total;
        }

    });

     restDays.addEventListener('change', function () {
         daysSum = +this.value;
         total = (daysSum + personsSum) * 4000;

         if (persons.value == '' || restDays.value == '') {
             totalValue.innerHTML = 0;
         } else {
             totalValue.innerHTML = total;
         }

     });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
    
});

