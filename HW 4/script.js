 /*

  назвати функцію getCodes

  observedCode - строка яку побачив шпіон

  function getCodes(observedCode) {
        // робіть що можете. повертає масив з пін-кодами. пін-коди мають бути строками
    }

   всі ПІН-коди, як спостережувані, так і результати,мають бути СТРОКАМИ через потенційні нулі на початку

 1 => 1, 2, 4
 2 => 1, 2, 3, 5
 3 => 2, 3, 6
 4 => 1, 4, 5, 7
 5 => 2, б 6, 8, 4
 6 => 3, 5, 6, 9
 7 => 4, 7, 8
 8 => 5, 7, 8, 0, 9
 9 => 6, 8, 9
 0 => 8, 0
  */

 let num = prompt('Enter the Number');
 function getNumbers(code,index) {

     switch (num){
         case '1':
             return ['1','2','4'];
             break;
         case '2':
             return ['1','2','3','5'];
             break;
         case '3':
             return ['2','3','6'];
             break;
         case '4':
             return ['1','4','5','7'];
             break;
         case '5':
             return ['2','4','5','6','8'];
             break;
         case '6':
             return ['3','5','6','9'];
             break;
         case '7':
             return ['4','7','8'];
         case '8':
             return ['5','7','8','9','0'];
             break;
         case '9':
             return ['6','8','9'];
             break;
         default:
             return ['0','8'];

     }

 }
 getNumbers().toString()
