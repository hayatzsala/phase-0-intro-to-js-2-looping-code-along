// Code your solutions in this file
function writeCards(names , thing){
    let i =0;
    const arr = [];
    while (i< names.length){
        var str = `Thank you, ${names[i]}, for the wonderful ${thing} gift!`;
        arr.push(str);
        i++;
    }
    return arr;
}

function countDown(num){
    
    for(let i =num; i>= 0;i--){
       console.log(i);
    }
}

countDown(4);