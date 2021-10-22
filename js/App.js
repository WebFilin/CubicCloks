
let allDispls = {
   // Дисплеи для вывода значения времени
   displHours1: document.querySelector(".base-displ__hours1"),
   displHours2: document.querySelector(".base-displ__hours2 "),
   displMinuts: document.querySelector(" .base-displ__minuts "),
   displSeconds: document.querySelector(" .base-displ__seconds ")
}

// Контейнер для одного собраного элемента кубика
let cubes = document.querySelector('.cubes-wrap');

//Рисуем поле элементов по массиву ArrAll и собираем цифру указанную в цункции changeNumbers
let createDisplClocks = (displ) => {

   // Добавляем класс для запуска анимации кубика
   cubes.classList.add("cubes__animo-flip");

   // Перебираем массив arrDispl
   for (i = 0; i < arrDispl.length; i++) {
      // создаем строки таблицы для вывода кубиков
      let tr = document.createElement("tr");

      // Перебираем массив arrDispl - получаем все значения
      for (j = 0; j < arrDispl[i].length; j++) {

         // Создаем отдельные элементы - кубики цифр
         let cells = document.createElement("div");
         cells.classList.add('cells');

         // Добавляем кубики в строки
         tr.append(cells);

         // Добаляем сформированную цифру на экран через аргумент displ
         displ.append(tr);

         // Отрисовываем нужный сегмент цифры по массиву numbers
         if (arrDispl[i][j] == 1) {
            let newCubes = cubes.cloneNode(true);
            newCubes.style.display = "block";
            cells.append(newCubes);
         }

      }

   }

}

// Получаем конкретную цифру для отрисовки - перерисовываем массив arrDispl по массиву numbers
function createNumber(time) {
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[time]);
}

// Переменные для передачи значения времени в функцию createNumber
let hours = 0;
let hours2 = 0;
let minutes = 0;
let seconds = 0;

// Устанавливаем значение времени
function currentTime() {
   let data = new Date();
   let timeHours = data.getHours();
   let timeMinuts = data.getMinutes();
   let timeSeconds = data.getSeconds();

   hours = timeHours;
   hours2 = timeHours;
   minutes = timeMinuts;
   seconds = timeSeconds;

   console.log("Секунды " + seconds)

}

function showTime() {

   cubes.classList.remove("cubes__animo-flip");
   currentTime();
}

showTime()


console.log("Внешние Секунды " + seconds)

createNumber(hours);
createDisplClocks(allDispls.displHours1);
createNumber(hours2);
createDisplClocks(allDispls.displHours2);
createNumber(minutes);
createDisplClocks(allDispls.displMinuts);
createNumber(seconds);
createDisplClocks(allDispls.displSeconds);










