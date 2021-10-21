


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
function createDisplClocks(displ, time) {

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

         // Добавляем результат выполнения функции в аргумент функции  
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

let hours = 0;
let hours2 = 0;
let minuts = 0;
let seconds = 0;

function aaa() {
   hours = ++hours;
   minuts = ++minuts;
}

console.log("переменная " + hours)

createDisplClocks(allDispls.displHours1, hours);
createDisplClocks(allDispls.displHours2, hours2);
createDisplClocks(allDispls.displMinuts, minuts);
createDisplClocks(allDispls.displSeconds, seconds)










// var img = new Array(
//    "image/time/img0.gif",
//    "image/time/img1.gif",
//    "image/time/img2.gif",
//    "image/time/img3.gif",
//    "image/time/img4.gif",
//    "image/time/img5.gif",
//    "image/time/img6.gif",
//    "image/time/img7.gif",
//    "image/time/img8.gif",
//    "image/time/img9.gif");

// function extract(type, hr, min, sec) {
//    if (hr <= 9) {
//       document.getElementById("h10").src = img[0];
//       document.getElementById("h1").src = img[hr];
//    }
//    else {
//       document.getElementById("h10").src = img[Math.floor(hr / 10)];
//       document.getElementById("h1").src = img[hr % 10];
//    }
//    if (min <= 9) {
//       document.getElementById("m10").src = img[0];
//       document.getElementById("m1").src = img[min];
//    }
//    else {
//       document.getElementById("m10").src = img[Math.floor(min / 10)];
//       document.getElementById("m1").src = img[min % 10];
//    }
//    if (sec <= 9) {
//       document.getElementById("s10").src = img[0];
//       document.getElementById("s1").src = img[sec];
//    }
//    else {
//       document.getElementById("s10").src = img[Math.floor(sec / 10)];
//       document.getElementById("s1").src = img[sec % 10];
//    }

// }
