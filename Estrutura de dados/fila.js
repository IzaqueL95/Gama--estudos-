var fila = [30, 20, 40, 80, 5, 14];

function findNumPosition(num){
    for(i=0; i<6; i++){
        if(num == fila[i]){
            return i;
        } 
    } return -1;
}

console.log(findNumPosition(40));
console.log(findNumPosition(12));

//CTRL ALT + N n