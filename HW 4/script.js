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


 function getNumbers(possibleCode) {
     let result = [];
     switch (possibleCode){
         case '1':
             result =  ['1','2','4'];
             break;
         case '2':
             result = ['1','2','3','5'];
             break;
         case '3':
             result = ['2','3','6'];
             break;
         case '4':
             result = ['1','4','5','7'];
             break;
         case '5':
             result = ['2','4','5','6','8'];
             break;
         case '6':
             result = ['3','5','6','9'];
             break;
         case '7':
             result = ['4','7','8'];
             break
         case '8':
             result = ['5','7','8','9','0'];
             break;
         case '9':
             result = ['6','8','9'];
             break;
         case '0':
             result = ['0','8'];
             break;
     }

     return result;

 }

 let arr = num.split('')
 let resultArr1 = getNumbers(arr[0])
 let resultArr2 = getNumbers(arr[1])
 let resultArr3 = getNumbers(arr[2])
 let resultArr4 = getNumbers(arr[3])
 let result = []
    for (let i = 0; i < resultArr1.length; i++) {
         for (let j = 0; j < resultArr2.length; j++) {
             for (let k = 0; k < resultArr3.length; k++) {
                 for (let n = 0; n < resultArr4.length; n++) {
                     let possibleCode = resultArr1[i] + resultArr2[j] + resultArr3[k] + resultArr4[n]
                     result.push(possibleCode)
                 }
             }
         }
     }


console.log(`RESULT: ${result}`)

//
//  const possibleCode = {
//      '1': ['1', '2', '4']
//      '2': ['1', '2', '3', '5']
//      '3': ['2', '3', '6']
//      '4': ['1', '4', '5', '7']
//      '5': ['2', '6', '8', '4']
//      '6': ['3', '5', '6', '9']
//      '7': ['4', '7', '8']
//      '8': ['5', '7', '8', '0', '9']
//      '9': ['6', '8', '9']
//      '0': ['8', '0']
//  }
//
// function getCodes(observedCode){
//     const  resultArray = [];
//
//     if (observedCode.length){
//         return[]
//     }
//
//     const originalLength = observedCode.length
//
//     switch (observedCode.length){
//         case 1:
//             observedCode = '000' + observedCode;
//             break;
//         case 2:
//             observedCode = '00' + observedCode;
//             break;
//         case 3:
//             observedCode = '0' + observedCode;
//             break;
//         case 4:
//             observedCode = observedCode;
//             break;
//         default:
//             break;
//     }
//
//     const  splitedCode = observedCode.split('')
//
//     const possibleArr1 = possibleCode[splitedCode[0]]
//     const possibleArr2 = possibleCode[splitedCode[1]] === underfind ? [] : possibleCode[splitedCode[1]]
//     const possibleArr3 = possibleCode[splitedCode[2]] === underfind ? [] : possibleCode[splitedCode[2]]
//     const possibleArr4 = possibleCode[splitedCode[3]] === underfind ? [] : possibleCode[splitedCode[3]]
//
//     possibleArr1.forEach(el1 =>{
//         if(originalLength === 1){
//             resultArray.push(`${el1}`)
//         }
//
//         possibleArr2.forEach(el2 =>{
//             if (originalLength === 2){
//                 resultArray.push(`${el1}${el2}`)
//             }
//
//             possibleArr3.forEach(el3 => {
//                 if (originalLength === 3){
//                     resultArray.push(`${el1}${el2}${el3}`)
//                 }
//
//                 possibleArr4.forEach(el4 =>{
//                     if (originalLength === 4){
//                         resultArray.push(`${el1}${el2}${el3}${el4}`)
//                     }
//
//                 })
//             })
//         )}
//
//     })
//
//
//
//     return resultArray
// }
//
// getCodes(['1'])
