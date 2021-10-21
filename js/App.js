
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

         // Добаляем сформированную цифру на экран через аргумент displ
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

// Разобраться с динамической заменой содержимого экрана часов, пока что идет добавление рядом но при замене цифр они таки меняются

let hours = 0;
let hours2 = 0;
let minuts = 0;
let seconds = 0;

function clock() {
   let date = new Date();
   h = date.getHours();
   m = date.getMinutes();
   s = date.getSeconds();

   seconds = s;

   console.log(s)
}

// setInterval(() => {
//   clock()
// }, 1000);

createDisplClocks(allDispls.displHours1, hours);
createDisplClocks(allDispls.displHours2, hours2);
createDisplClocks(allDispls.displMinuts, minuts);
createDisplClocks(allDispls.displSeconds, seconds);












