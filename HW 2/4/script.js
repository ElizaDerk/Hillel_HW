let place = alert('Your first place')
    let a = prompt('Enter x', 1)
    let b = prompt('Enter y', 1)

if (a>=1 && a<=8 && b>=1 && b<=8) {
    alert(true);

    let step = alert('Please, do the step')
        var x = prompt('Enter position for x', 1)
        var y= prompt('Enter position for y', 1)
    if (x>=1 && x<=8 && y>=1 && y<=8){
        if ((a+x) && (b+y)){
            if(x<=2 && y<=2) {
                alert('True')
            }
                else if ( (a=x) && (b=y)){
                    alert('False')
                }
        }

        else if ((a-x) && (b-y)) {
            if(x<=2 && y<=2){
                alert('True')
            }
        }
    }
    else {
        alert('False')
    }
}
    else {
    alert('False')
}







