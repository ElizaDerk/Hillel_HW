let mas=new Array();
let n= parseInt(prompt("Enter the length of array, N"))
let m= parseInt(prompt("Enter the length of array, M"));

for(i=0;i<n;i++) {
    mas[i]=new Array(m);
}

for(i=0;i<n;i++) {
    for (j = 0; j < m; j++) {
        mas[i][j] = parseInt(Math.random()*10);
    }
}

function display(){
    for (let i = 0; i < mas.length; i++) {
        console.log('-------')
        let stringDisplay = ''
        for (let j = 0; j < mas[i].length; j++) {
            stringDisplay += ` ${mas[i][j]} `
        }
        console.log(stringDisplay)
    }

}

display();


