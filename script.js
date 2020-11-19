const prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    thumbnail = document.getElementsByClassName("thumbnail"),
    becgraun = document.getElementById("becgraun");

let backgroundImg = new Array(
                "img/1pu.png" ,
                "img/4tfs.png" ,
                "img/5uber.png" ,
                "img/6word.png" ,
                "img/7yoga.png" ,
                "img/2kino.png" ,
                "img/3littel.png" ,
                "img/react-prodject.png"
);
let i = 0;
    next.onclick = function () {
    if (i < 7) {
        becgraun.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
        }
}

prev.onclick = function () {
    if (i > 0) {
        becgraun.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}