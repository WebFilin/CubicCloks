
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

let displHours1 = document.getElementById("displHours1");
let displHours2 = document.getElementById("displHours2");
let displMinuts = document.getElementById("displMinuts");
let displSeconds = document.getElementById("displSeconds");

let cubes = document.getElementById('wrapCube');



//Рисуем поле элементов по массиву ArrAll
function createDisplClocs(createTable) {
   let cells;
   for (i = 0; i < arrDispl.length; i++) {
      let tr = document.createElement("tr");
      for (j = 0; j < arrDispl[i].length; j++) {
         cells = document.createElement("div");
         cells.className = 'cells';
         cells.innerHTML = arrDispl[i][j];
         tr.appendChild(cells);
         createTable.appendChild(tr);
         if (arrDispl[i][j] == 1) {
            let newCubes = cubes.cloneNode(true);
            newCubes.style.display = "block";
            cells.append(newCubes);
         }
      }
   }
};

//Меняем элементы перебором массива numbers и заменой массива ArrAll  
function changeSec(time) {
   arrDispl.splice(0);
   Array.prototype.push.apply(arrDispl, numbers[time]);
};



createDisplClocs(displHours1, changeSec(1));
createDisplClocs(displHours2, changeSec(2));
createDisplClocs(displMinuts, changeSec(3));
createDisplClocs(displSeconds, changeSec(4));


