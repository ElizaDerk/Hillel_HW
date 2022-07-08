 /*

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


 let num = prompt("Enter the Number")
 while (isEmptyOrNull(num)) {
     num = prompt('Please, Enter the Number');
 }

 function isEmptyOrNull(value) {
     if (value == null && value !== '')
         return true
     else return value.trim().length === 0;
 }


 function getNumbers() {
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
         case '0':
             return ['0','8'];
             break;
     }

 }



 function getCodes() {
     let yourArr = new Array(num)
     if (yourArr.length === 1) {
         let arr = ''
         for (let i = 0; i < arr.length; i++) {
             getNumbers().add(arr[i])
         }
         let result = Array.from(getNumbers(num))
         return (result)
     }
     else if (yourArr.length === 2) {
         let arrayOne = ''
         let arrayTwo = ''
         for (let i = 0; i < arrayOne.length; i++) {
             for (let j = 0; j < arrayTwo.length; j++) {
                 let arrayOneTwo = arrayOne[i] + arrayTwo[j]
                 getNumbers().add(arrayOneTwo)
             }
         }
         let result = Array.from(getNumbers(num))
         return (result)
     }
 }

 console.log(getCodes())





     


