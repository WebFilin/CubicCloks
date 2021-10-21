
let allDispls = {
   // Дисплеи для вывода значения времени
   displHours1: document.getElementById("displHours1"),
   displHours2: document.getElementById("displHours2"),
   displMinuts: document.getElementById("displMinuts"),
   displSeconds: document.getElementById("displSeconds"),
}



// Контейнер для одного элемента кубика
let cubes = document.getElementById('wrapCube');

//Рисуем поле элементов по массиву ArrAll и собираем цифру указанную в цункции changeNumbers
let createDisplClocks = (displ, time) => {

   // Перебираем массив arrDispl
   for (i = 0; i < arrDispl.length; i++) {
      // создаем строки таблицы для вывода кубиков
      let tr = document.createElement("tr");

      // Перебираем массив arrDispl - получаем все значения
      for (j = 0; j < arrDispl[i].length; j++) {
         // Создаем отдельные элементы - кубики цифр
         let cells = document.createElement("div");
         cells.className = 'cells';

         // Добавляем кубики в строки
         tr.append(cells);

         displ.append(tr);

         // Получаем конкретную цифру для отрисовки - перерисовываем массив arrDispl по массиву numbers
         arrDispl.splice(0);
         Array.prototype.push.apply(arrDispl, numbers[time]);

         // Отрисовываем нужный сегмент цифры по массиву numbers
         if (arrDispl[i][j] == 1) {
            let newCubes = cubes.cloneNode(true);
            newCubes.style.display = "block";
            cells.append(newCubes);
         }
      }
   }
}

let hours = 1;
let hours2 = 2;
let minuts = 3;
let seconds = 4;

function clock() {
   now = new Date();
   h = now.getHours();
   m = now.getMinutes() / 10;
   s = now.getSeconds() / 10;
}

function showTime() {

   createDisplClocks(allDispls.displHours1, hours);
   createDisplClocks(allDispls.displHours2, hours2);
   createDisplClocks(allDispls.displMinuts, minuts);
   createDisplClocks(allDispls.displSeconds, seconds);

}

showTime()










