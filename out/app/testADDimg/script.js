const addImgBtn = document.getElementById("add-img-btn");
const deskImgInput = document.getElementById("description-img");
const todosImg = document.getElementById("todos-img-wrapper");
const imgContainer = document.getElementById("image-container");

let imgs;
!localStorage.imgs
  ? (imgs = [])
  : (imgs = JSON.parse(localStorage.getItem("imgs")));

let todoItemElement = [];

const createTemplate = (img, index) => {
  return `
  <div class="card large todo-img ${img.completed ? "checked" : ""}">
              <div class="card-image">
                <img src="${img.srcimg}">
                <span class="card-title">${img.description}</span>
              </div>
              <div class="card-content">
                <p>${img.description}</p>
                 <div class="switch">
    <label>
      
      <input type="checkbox" onclick="completeImg(${index})" class="btn-complete" type="checkbox" ${
    img.completed ? "checked" : ""
  } >
      <span class="lever"></span>
      
    </label>
  </div>
              </div>
              <div class="card-action">
                <a href="#"><button onclick="deleteImg(${index})" class="btn-delete">Удалить файл</button></a>
               
       
              </div>
            </div>
   
    `;
};

function fillHtmlList() {
  todosImg.innerHTML = "";
  if (imgs.length > 0) {
    imgs.forEach((item, index) => {
      todosImg.innerHTML += createTemplate(item, index);
    });
    todoItemElement = document.querySelectorAll(".todo-img");
  }
}

function Img(description, srcimg) {
  this.description = description;
  this.srcimg = srcimg;
  this.completed = false;
}

fillHtmlList();

const updateLocal = () => {
  localStorage.setItem("imgs", JSON.stringify(imgs));
};

const completeImg = (index) => {
  console.log(index);
  imgs[index].completed = !imgs[index].completed;
  if (imgs[index].completed) {
    todoItemElement[index].classList.add("checked");
  } else {
    todoItemElement[index].classList.remove("checked");
  }
  updateLocal();
  fillHtmlList();
};

addImgBtn.addEventListener("click", () => {
  imgs.push(new Img(deskImgInput.value, imgContainer.src));

  deskImgInput.value = null;
  updateLocal();
  fillHtmlList();
});

const deleteImg = (index) => {
  todoItemElement[index].classList.add("delition");
  setTimeout(() => {
    imgs.splice(index, 1);
    updateLocal();
    fillHtmlList();
  }, 500);
};

(function () {
  var imgInput = document.getElementById("image-input"),
    imgContainer = document.getElementById("image-container"),
    updateUi = function () {
      imgContainer.src = window.localStorage.getItem("image-base64");
    },
    bindUi = function () {
      imgInput.addEventListener(
        "change",
        function () {
          if (this.files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
              window.localStorage.setItem("image-base64", e.target.result);
              updateUi();
            };
            reader.readAsDataURL(this.files[0]);
          }
        },
        false
      );
    };

  updateUi();
  bindUi();
})();

// Приветствую. Как и договаривались, даю тестовое задание
// Є кнопка. За її допомогою завантажити вибрані фото з комп’ютера і відобразити їх (з назвою фото).
//  Фото мають залишатись при перезавантаженні сторінки. При повторному виборі фото, вони мають додаватись до існуючих.
//   Також мати функціонал, щоб можна було видалити окремо кожну фотографію.
//    Зробити анімацію (спочатку закреслюється назва фото і потім фото видаляється).
//  Стилізація на власний розсуд, але хороше оформлення вітається
