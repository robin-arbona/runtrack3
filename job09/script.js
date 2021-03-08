function tri(numbers,order){
    if(order == 'asc'){
        return numbers.sort(function(a, b){return a-b});
    } else if (order == 'desc'){
        return numbers.sort(function(a, b){return a-b}).reverse();
    }
}

function tri2(numbers,order){
    if(order == 'asc'){
        return sort(numbers);
    } else if (order == 'desc'){
        return reverse(sort(numbers));
    }
}

function sort(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] > array[i+1]){
            tmp = array[i+1];
            array[i+1] = array[i];
            array[i] = tmp;
            sort(array);
        }
    }
    return array;
}

function reverse(array){
    let arrayReverse = [];
    for (let i = array.length; i > 0 ; i--) {
        arrayReverse.push(array[i]);
    }
    return arrayReverse;
}

function arrayrandom(maxvalue,lengtharray){
    let array = [];
    for (let i = 0; i < lengtharray; i++) {
        array.push(Math.trunc(Math.random()*maxvalue));
    }
    return array;
}

const numbers = arrayrandom(100,100);


console.log(Date.now());
console.log(tri2(numbers,'asc'));
console.log(Date.now());



