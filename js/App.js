// Дисплеи для вывода значения времени
const displHours = document.querySelector(".base-displ__hours");
const displHours2 = document.querySelector(".base-displ__hours2 ");
const displMinuts = document.querySelector(" .base-displ__minuts ");
const displMinuts2 = document.querySelector(" .base-displ__minuts2 ");
const displSeconds = document.querySelector(" .base-displ__seconds ");
const displSeconds2 = document.querySelector(" .base-displ__seconds2 ");

// Кнопки управления
const btnStart = document.querySelector(".button-control__start ")
const btnStop = document.querySelector(".button-control__stop ")

//Создаем контейнер для одного собраного элемента кубика
const cubes = document.createElement("div");
cubes.classList.add("cubes", "cubes-wrap");

// Набор имен классов для присвоения анимации определенному набору кубов - пока не используется
let classCubeNames = {
   second1: "seconds-1",
   second2: "seconds-2",
}

// Создаем грани кубика 
const cubesSides = `
		<div class="right side"></div>
		<div class="bottom side"></div>
		<div class="front side"></div>
`;

// Создаем один полный кубик
cubes.insertAdjacentHTML("afterbegin", cubesSides);

// Устанавливаем значение времени
function currentTime() {
   // Получаем дату
   let data = new Date();
   let hours = data.getHours();
   let minuts = data.getMinutes();
   let seconds = data.getSeconds();

   // Вызываем управление дисплеями
   displayControl(hours, minuts, seconds);
}

//Рисуем поле элементов по массиву ArrAll и собираем цифру указанную в цункции changeNumbers
function createNumber(displ, time) {

   // Очищаем таблицу экрана displ перед заполнением значениями
   while (displ.rows.length) {
      displ.deleteRow(0);
   }

   // Получаем конкретную цифру для отрисовки - перерисовываем массив arrDispl по массиву numbers
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[time]);

   // Перебираем массив arrDispl
   for (i = 0; i < arrDispl.length; i++) {
      // создаем строки таблицы для вывода кубиков
      let tr = document.createElement("tr");
      // Перебираем массив arrDispl - получаем все значения
      for (j = 0; j < arrDispl[i].length; j++) {
         // Создаем отдельные элементы - кубики цифр
         let cells = document.createElement("div");
         cells.classList.add('cells');
         // Отрисовываем нужный сегмент цифры по массиву numbers
         if (arrDispl[i][j] === 1) {
            let newCubes = cubes.cloneNode(true);

            cells.append(newCubes);
         }
         // Добавляем кубики в строки
         tr.append(cells);
         // Добаляем сформированную цифру на экран через аргумент displ
         displ.append(tr);
      }
   }

}

// Управляем выводом времени на дисплеи - на каждый дисплей (их два на каждую цифру) пердаем свою цифру индивидуально
function displayControl(hours, minuts, seconds) {
   // Переформатруем время и разделяем его на два значения для отображения на каждом из 6 табло
   let displH1 = Number(hours.toString().slice(0, 1));
   let displH2 = Number(hours.toString().slice(-1,));
   let displMin1 = Number(minuts.toString().slice(0, 1));
   let displMin2 = Number(minuts.toString().slice(-1,));
   let displSec1 = Number(seconds.toString().slice(0, 1));
   let displSec2 = Number(seconds.toString().slice(-1,));

   // Логика отображения времени - устанавливаем 0 на первом циферблате при полученном одинарном числе
   if (hours > 9) {
      createNumber(displHours, displH1);
      createNumber(displHours2, displH2);
   }
   else {
      createNumber(displHours, displH1 = 0);
      createNumber(displHours2, displH2);
   }
   if (minuts > 9) {
      createNumber(displMinuts, displMin1);
      createNumber(displMinuts2, displMin2);
   }
   else {
      createNumber(displMinuts, displMin1 = 0);
      createNumber(displMinuts2, displMin2);
   }
   if (seconds > 9) {
      createNumber(displSeconds, displSec1);
      createNumber(displSeconds2, displSec2);
   }
   else {
      createNumber(displSeconds, displSec1 = 0);
      createNumber(displSeconds2, displSec2);
   }

}

// Управление анимацией переворота
// !!!!!!!! Разобраться как подключить анимацию к конкретному дисплею, пока что два дисплея одного разряда дисплея стратуют одновременно
function addAnimoRotation(cubesOnDispl) {
   // Получаем все кубики - на данном дисплее
   // let cubesLists = cubesOnDispl.querySelectorAll(".cubes");
   let cubesLists = cubesOnDispl.querySelectorAll(".cubes");

   // Добавляем класс анимации
   cubesLists.forEach((item) => {
      item.classList.add("cubes__animo-flip");
      item.addEventListener('animationend', () => {
         item.classList.remove('cubes__animo-flip');
      })
   })
}

currentTime()

// Кнопки управлени часами
let intervalTime;

btnStart.addEventListener("click", () => {
   intervalTime = setInterval(() => {
      currentTime();
   }, 1000);
})

btnStop.addEventListener("click", () => {
   clearInterval(intervalTime);
})

