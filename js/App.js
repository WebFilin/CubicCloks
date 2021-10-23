// Дисплеи для вывода значения времени
displHours = document.querySelector(".base-displ__hours");
displHours2 = document.querySelector(".base-displ__hours2 ");
displMinuts = document.querySelector(" .base-displ__minuts ");
displMinuts2 = document.querySelector(" .base-displ__minuts2 ");
displSeconds = document.querySelector(" .base-displ__seconds ");
displSeconds2 = document.querySelector(" .base-displ__seconds2 ");

// Контейнер для одного собраного элемента кубика
let cubes = document.querySelector('.cubes-wrap');

//Рисуем поле элементов по массиву ArrAll и собираем цифру указанную в цункции changeNumbers
function createDisplClocks(displ, time) {

   // Очищаем таблицу экрана displ перед заполнением значениями
   while (displ.rows.length) {
      displ.deleteRow(0);
   }

   // Получаем конкретную цифру для отрисовки - перерисовываем массив arrDispl по массиву numbers
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[time]);

   // Добавляем класс для запуска анимации кубика
   // cubes.classList.add("cubes__animo-flip");

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
         if (arrDispl[i][j] == 1) {
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


// Устанавливаем значение времени
function currentTime() {

   // Получаем дату
   let data = new Date();
   let hours = data.getHours();
   let minuts = data.getMinutes();
   let seconds = data.getSeconds();

   // Переформатруем дату и разделяем ее на два значения для каждого из табло
   let displH1 = Number(hours.toString().slice(0, 1));
   let displH2 = Number(hours.toString().slice(-1,));

   let displMin1 = Number(minuts.toString().slice(0, 1));
   let displMin2 = Number(minuts.toString().slice(-1,));

   let displSec1 = Number(seconds.toString().slice(0, 1));
   let displSec2 = Number(seconds.toString().slice(-1,));

   // Логика отображения времени

   if (hours > 10) {
      createDisplClocks(displHours, displH1);
      createDisplClocks(displHours2, displH2);
   }
   else {
      createDisplClocks(displHours, 0);
      createDisplClocks(displHours2, hours);
   }

   if (minuts > 10) {
      createDisplClocks(displMinuts, displMin1);
      createDisplClocks(displMinuts2, displMin2);
   }
   else {
      createDisplClocks(displMinuts, 0);
      createDisplClocks(displMinuts2, minuts);
   }

   if (seconds > 10) {
      createDisplClocks(displSeconds, displSec1);
      createDisplClocks(displSeconds2, displSec2);
   }
   else {
      createDisplClocks(displSeconds, 0);
      createDisplClocks(displSeconds2, seconds);
   }

   setTimeout(() => {
      currentTime()
   }, 1000);
}

currentTime()










