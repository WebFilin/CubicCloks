
//Сегментный дисплей для отображения цифр
let arrDispl = [
   [0, 0, 0],
   [0, 0, 0],
   [0, 0, 0],
   [0, 0, 0],
   [0, 0, 0],
];

//Цифры для замены
let numbers = [
   zero = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
   ],

   one = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
   ],

   two = [
      [1, 1, 1],
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 1, 1],
   ],

   three = [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
   ],

   four = [
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1],
   ],

   five = [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
   ],

   six = [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
   ],

   seven = [
      [1, 1, 1],
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
   ],

   eight = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
   ],
   nine = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
   ],
];

// Дисплеи для вывода значения времени
let displHours1 = document.getElementById("displHours1");
let displHours2 = document.getElementById("displHours2");
let displMinuts = document.getElementById("displMinuts");
let displSeconds = document.getElementById("displSeconds");

let cubes = document.getElementById('wrapCube');

//Рисуем поле элементов по массиву ArrAll
function createDisplClocks(createNumber) {

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

         // Добавляем собарную цифру на нужный дисплей для отображения всех цифр
         createNumber.append(tr);

         // Отрисовываем нужный сигмент цифры по массиву numbers
         if (arrDispl[i][j] == 1) {
            let newCubes = cubes.cloneNode(true);
            newCubes.style.display = "block";
            cells.append(newCubes);
         }
      }
   }
}

//Меняем элементы перебором массива numbers и заменой в массиве ArrAll - управляем временем на каждом дисплее отдельно
function changeHours1(Hours1) {
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[Hours1]);
   createDisplClocks(displHours1);
};

function changeHours2(Hours2) {
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[Hours2]);
   createDisplClocks(displHours2);
};

function changeMinuts(minuts) {
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[minuts]);
   createDisplClocks(displMinuts);
};

function changeSeconds(seconds) {
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[seconds]);
   createDisplClocks(displSeconds);
};

let hours1 = 1;
let hours2 = 2;
let minuts = 3;
let seconds = 4

changeHours1(hours1);
changeHours2(hours2);
changeMinuts(minuts);
changeSeconds(seconds);