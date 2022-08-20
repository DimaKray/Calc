let x = '';
let y = '';
let symbol = '';
let end = false;
const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
const actions = ['+','-','x','/','%'];
const clear = 'C';
const output = document.querySelector('.panel p');

document.querySelector('.buttoms').onclick = (event) => {
   if (!event.target.classList.contains('btm')) {
      return;
   };
   output.textContent = '';

   const key = event.target.textContent;
   if (numbers.includes(key)) {
      if (y === '' && symbol ==='') {
         x += key;
         console.log(x);
         output.textContent = x;
      } else if (x !== '' && y !== '' && end) {
         y = key;
         end = false;
         output.textContent = y;
      } else {
         y += key;
         console.log(y);
         output.textContent = y;
      };
   };

   if (actions.includes(key)) {
      symbol = key;
      console.log(symbol);
      output.textContent = key;
      return;
   };

   if (key === '=') {
      if (y === '') {
         y = x;
      };
      switch (symbol) {
         case '+':
            x = (+x) + (+y);
            break;
         case '-':
            x = x - y;
            break;
         case 'x':
            x = x * y;
            break;
         case '/':
            if (y === '0') {
               output.textContent = 'ERROR!';
               x = '';
               y = '';
               symbol = '';
               return;
            }
            x = x / y;
            break;
      }
      end = true;
      output.textContent = x;
      console.log(x, y, symbol)
   };

   if (clear.includes(key)) {
      x = '';
      y = '';
      symbol = '';
      end = false;
      output.textContent = 0;
   };
};