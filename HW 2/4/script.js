let place = alert('Your first place')
let a = +prompt('Enter x')
let b = +prompt('Enter y')

if (a>=1 && a<=8 && b>=1 && b<=8) {
    alert(true);

    let step = alert('Please, do the step')
        var stepX = +prompt('Enter position for x')
        var stepY= +prompt('Enter position for y')
    if (stepX>=1 && stepX<=8 && stepY>=1 && stepY<=8){
        if ((a+2)==stepX && ((b-1)==stepY || (b+1)==stepY)) {
            alert('True')
        }
        else if ((a+1)==stepX && ((b-2)==stepY || (b+2)==stepY)) {
            alert('True')
        }
        else if ( (a === stepX) && (b === stepY)){
            alert('Make a move')
        }
        else if ((a-2)==stepX && ((b-1)==stepY || (b+1)==stepY)) {
            alert('True')
        }
        else if ((a-1)==stepX && ((b-2)==stepY || (b+2)==stepY)) {
            alert('True')
        }
        else{
            alert('false')
        }

    }
    else {
        alert('False')
    }
}
else {
    alert('False')
}
